import React, { useState, useEffect } from 'react';
import BCard from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import placeholder from '../assets/placeholder.jpeg'

const Card = (props) => {
	return (
		<BCard className="ma-card" style={{ width: '18rem' }}>
			<BCard.Body>
				<BCard.Title>{props.product.name ? props.product.name : "null"}</BCard.Title>
				<BCard.Subtitle className="mb-2 text-muted">{props.product.description ? props.product.description : "null"}</BCard.Subtitle>
				<BCard.Text>
					<img src={placeholder} alt="sds" />
				</BCard.Text>
				<BCard.Link href="#">Add to cart</BCard.Link>
				<BCard.Link href="#">See more</BCard.Link>
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
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);