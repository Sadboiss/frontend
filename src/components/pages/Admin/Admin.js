import React, { useEffect } from "react";
import { Checkbox, Table, Image, Loader, Tab } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { productActions, categoryActions, sizeActions } from '../../../actions';
import AddProductModal from './AddProductModal';
import EditProductModal from './EditProductModal';
import RemoveProductModal from './RemoveProductModal';
import './Admin.scss';

const Admin = (props) => {
	useEffect(() => {
		props.getSizes();
		props.getCategories();
		props.getProducts();
	}, []);

	const handleChange = async (event, data) => {
		let product = JSON.parse(data.value);
		product.display = data.checked;
		props.updateDisplay(product);
	}

	const panes = [
		{ menuItem: 'Products', render: () => Tab1() },
		{ menuItem: 'Stocks', render: () => Tab2() },
	]



	const Tab1 = () => {
		const row = (product, index) => {
			return (
				<Table.Row key={index}>
					<Table.Cell collapsing>
						<Checkbox value={JSON.stringify(product)} checked={product.display} slider onChange={(event, data) => handleChange(event, data)} />
					</Table.Cell>
					<Table.Cell>{product.id}</Table.Cell>
					<Table.Cell>{product.name}</Table.Cell>
					<Table.Cell>{product.price} $</Table.Cell>
					<Table.Cell><Image src={`data:image/jpeg;base64,${product.image}`} size='tiny' /></Table.Cell>
					<Table.Cell>{product.category.name}</Table.Cell>
					<Table.Cell className="action-btns" textAlign="center">
						<EditProductModal product={product} />
						<RemoveProductModal product={product} />
					</Table.Cell>
				</Table.Row>
			)
		}
		return (
			<>
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
						{!props.loaded ?
							<Table.Row>
								<Table.Cell collapsing>
									<Loader active />
								</Table.Cell>
							</Table.Row>
							:
							props.products.map((product, index) => { return row(product, index) })
						}
					</Table.Body>
				</Table>
				<AddProductModal />
			</>
		)
	}

	const Tab2 = () => {

		const row = (product, index) => {
			console.log(product.productSizes)
			return (
				<Table.Row key={index}>
					<Table.Cell>{product.id}</Table.Cell>
					<Table.Cell>{product.name}</Table.Cell>
					<Table.Cell>{product.price} $</Table.Cell>
					{product.productSizes.map((ps, index) => {
						return (
							<Table.Cell key={index}>{ps.inStock}</Table.Cell>
						)
					})}
				</Table.Row>
			)
		}

		return (
			<>
				<Table celled size="small">
					<Table.Header >
						<Table.Row>
							<Table.HeaderCell>Id</Table.HeaderCell>
							<Table.HeaderCell>Name</Table.HeaderCell>
							<Table.HeaderCell>Price</Table.HeaderCell>
							{props.sizes ?
								props.sizes.map((size, index) => {
									return <Table.HeaderCell key={index}>{size.name}</Table.HeaderCell>
								})
								:
								null
							}
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{!props.loaded ?
							<Table.Row>
								<Table.Cell collapsing>
									<Loader active />
								</Table.Cell>
							</Table.Row>
							:
							props.products.map((product, index) => { return row(product, index) })
						}
					</Table.Body>
				</Table>
				<AddProductModal />
			</>
		)
	}

	return (
		<div className="admin-wrapper">
			<Tab
				menu={{ fluid: true, vertical: true }}
				menuPosition='left'
				panes={panes}
			/>
		</div>
	);


}

const mapStateToProps = (state) => {
	const { loaded, products } = state.products;
	const { sizes } = state.sizes;
	return {
		loaded,
		products,
		sizes
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		getSizes: () => dispatch(sizeActions.getAll()),
		getCategories: () => dispatch(categoryActions.getAll()),
		getProducts: () => dispatch(productActions.getAll()),
		updateDisplay: (product) => dispatch(productActions.updateDisplay(product))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);