import React,{useContext} from 'react';
import { ProductContext} from '../contexts/ProductContext'

// Components
import Product from './Product';

const Products = () => {
	{/*using products and additem in context*/}
	const { products, addItem } = useContext(ProductContext)

	return (
		<div className="products-container">
			{/*mapping products into my product component*/}
			{products.map(product => (
				<Product
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
