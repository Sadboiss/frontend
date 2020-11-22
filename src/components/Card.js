import React, { useState, useEffect } from 'react';
import BCard from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import placeholder from '../assets/placeholder.jpeg';
import { cartActions } from '../actions';

const Card = (props) => {

	const handleAction = () => {
		if(props.product) {
			props.addToCart(props.product);
		}
	}

	return (
		<BCard style={{ width: '18rem' }}>
		<BCard.Img variant="top" src={placeholder} />
		<BCard.Body>
		  <BCard.Title>{props.product.name}</BCard.Title>
		  <BCard.Text>
			{props.product.description ? props.product.description : null}
		  </BCard.Text>
		  <Button variant="primary" onClick={() => handleAction()}>Add to cart</Button>
		</BCard.Body>
	  </BCard>
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

export default connect(mapStateToProps, mapDispatchToProps)(Card);