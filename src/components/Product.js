import React from 'react';

const Product = props => {
	return (
		<div className="product">
			{/*product image or title*/}
			<img src={props.product.image} alt={`${props.product.title} book`} />
				{/*product  title*/}
			<h1 className="title">{props.product.title}</h1>
				{/*product price*/}
			<p className="price">${props.product.price}</p>
				{/*adding to cart*/}
			<button onClick={() => props.addItem(props.product)}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;
