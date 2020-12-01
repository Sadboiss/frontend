import React from 'react';
import { Icon, Image, Card, Button, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { cartActions } from '../actions';
import './ProductCard.scss';

const ProductCard = (props) => {

	const handleAction = () => {
		if (props.product) {
			props.addToCart(props.product);
		}
	}

	return (
		<div className="card-wrapper">
			<Card>
				<Image src={`data:image/jpeg;base64,${props.product.image}`} wrapped ui={false} />
				<Card.Content>
					<Card.Header>{props.product.name}</Card.Header>
					<Card.Meta>
						<span className='date'>{props.product.category.name}</span>
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
					<a 
						className="add-btn" 
						onClick={() => handleAction()}
					>
						<Icon size="big" name='add to cart' />
					</a>
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