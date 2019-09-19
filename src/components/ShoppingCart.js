import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext'
// Components
import ShoppingCartItem from './ShoppingCartItem';

const ShoppingCart = () => {
	{/*using cart in context*/}
	const { cart } = useContext(CartContext)
{/*using reduce with acc and value.price to get the carts total*/}
	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{/*mapping over cart into the shoppingcartitem component*/}
			{cart.map(item => (
				<ShoppingCartItem key={item.id} {...item} />
			))}
{/*calling getcarttotal function*/}
			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
