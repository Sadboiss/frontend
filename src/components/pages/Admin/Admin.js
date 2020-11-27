import React, { useState, useEffect } from "react";
import { Checkbox, Table, Image, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { productActions, categoryActions } from '../../../actions';
import AddProductModal from './AddProductModal';
import EditProductModal from './EditProductModal';
import RemoveProductModal from './RemoveProductModal';
import './Admin.scss';

const Admin = (props) => {

	useEffect(() => {
		props.getAllCategories();
		props.getAllProducts();
	}, []);

	const handleChange = (event, data) => {
		let product = JSON.parse(data.value);
		product.display = data.checked;
		props.updateDisplay(product)
	}

	const row = (product, index) => {
		return (
			<Table.Row key={index}>
				<Table.Cell collapsing>
					<Checkbox value={JSON.stringify(product)} checked={product.display} slider onChange={(event, data) => handleChange(event, data)}/>
				</Table.Cell>
				<Table.Cell>{product.id}</Table.Cell>
				<Table.Cell>{product.name}</Table.Cell>
				<Table.Cell>{product.price} $</Table.Cell>
				<Table.Cell><Image src={`data:image/jpeg;base64,${product.image}`} size='tiny' /></Table.Cell>
				<Table.Cell>{product.category.name}</Table.Cell>
				<Table.Cell className="action-btns" textAlign="center">
					<EditProductModal product={product}/>
					<RemoveProductModal product={product} />
				</Table.Cell>
			</Table.Row>
		)
	}

	return (
		<div className="admin-wrapper">
			<Table celled size="small">
				<Table.Header >
					<Table.Row>
						<Table.HeaderCell>Display</Table.HeaderCell>
						<Table.HeaderCell>Id</Table.HeaderCell>
						<Table.HeaderCell>Name</Table.HeaderCell>
						<Table.HeaderCell>Price</Table.HeaderCell>
						<Table.HeaderCell>Image</Table.HeaderCell>
						<Table.HeaderCell>Category</Table.HeaderCell>
						<Table.HeaderCell>Actions</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{props.loading ? 
						<Table.Row>
							<Table.Cell collapsing>
								<Loader active />
							</Table.Cell>
						</Table.Row>
						:
						null
					}
					{props.loaded ?
						props.products.map((product, index) => {return row(product, index)})
						:
						null
					}
				</Table.Body>	
			</Table>
			<AddProductModal />
		</div>
	);


}

const mapStateToProps = (state) => {
	const { loading, loaded, products } = state.products;
	return {
		loading,
		loaded,
		products
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		getAllCategories: () => dispatch(categoryActions.getAll()),
		getAllProducts: () => dispatch(productActions.getAll()),
		updateDisplay: (product) => dispatch(productActions.updateDisplay(product))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);