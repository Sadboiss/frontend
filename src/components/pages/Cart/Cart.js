import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import Payment from '../../Payment'
import './Cart.scss';

const Cart = () => {
	
	const [cartItems, setCartItems] = useState();

	useEffect(() => {
		let cart = JSON.parse(localStorage.getItem('cart'));
		if(cart) {
			setCartItems(cart.cartItems);
		}
	}, [])
	
	const getTotal = () => {
		if(cartItems) {
			return cartItems.map(x => x.quantity * x.product.price).reduce((z, y) => z + y);
		}
	}

	const row = (item, index) => {
		return (
			<Table.Row key={index}>
				<Table.Cell>
					{item.product.name}
				</Table.Cell>
				<Table.Cell>
					{item.product.price}$ (ea)
				</Table.Cell>
				<Table.Cell>
					{item.quantity}
				</Table.Cell>
				<Table.Cell>
					{item.product.description}
				</Table.Cell>
				<Table.Cell>
					{item.product.price * item.quantity}$
				</Table.Cell>
			</Table.Row>
		)
	}

	return (
		<div className="cart-wrapper">
			<Table celled padded selectable>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell singleLine>Item</Table.HeaderCell>
						<Table.HeaderCell>Price</Table.HeaderCell>
						<Table.HeaderCell>Quantity</Table.HeaderCell>
						<Table.HeaderCell>Description</Table.HeaderCell>
						<Table.HeaderCell>Total</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{cartItems ? 
						cartItems.map((item, index) => {
							return row(item, index)
						})
						:
						null
					}

				</Table.Body>
			</Table>
			<div className="checkout">
				<p><b>Cart total : {getTotal()}$</b></p>
				<Button secondary>Checkout</Button>
			</div>
			<div>
				<Payment />
			</div>
		</div>
	)
}

export default Cart;