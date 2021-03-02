import React, { useState, useEffect } from 'react';
import { Icon, Image, Card, Label, Button, Dimmer, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { cartActions } from '../actions';
import './ProductCard.scss';

const ProductCard = (props) => {

	const [inStock, setInStock] = useState(0)

	useEffect(() => {
		calcInStock();
	}, [props.product])

	const handleAction = () => {
		if (props.product) {
			props.addToCart(props.product);
		}
	}

	const calcInStock = () => {
		console.log(props)
		if (props.product)
			setInStock(props.product.productSizes.map(ps => ps.inStock).reduce((z, y) => z + y));
	}

	const isOfOutStock = () => {
		return inStock <= 0;
	}

	return (
		<div className={`card-wrapper ${isOfOutStock() ? 'dim-opacity' : null}`}>
			<Card>
				<Image src={`data:image/jpeg;base64,${props.product.image}`} wrapped ui={false} />
				<Card.Content>
					<Card.Header>{props.product.name}</Card.Header>
					<Card.Meta>
						<span className='date'>{props.product.category.name}</span>
					</Card.Meta>
					<Card.Meta>
						<span className='date'>In stock: {inStock}</span>
					</Card.Meta>
					<Card.Description>
						{props.product.description}
					</Card.Description>
				</Card.Content>
				<Card.Content extra >
					<Label className="price">
						<Icon name='dollar sign' />
						{props.product.price}
					</Label>

					<Button
						className='add-btn'
						disabled={isOfOutStock()}
						onClick={() => handleAction()}
					>
						<Button.Content>
							<Icon size="big" name='add to cart' />
						</Button.Content>
					</Button>
				</Card.Content>
			</Card>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {

	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (product) => dispatch(cartActions.addToCart(product)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);