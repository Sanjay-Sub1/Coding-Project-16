import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <ProductItem 
            key={product.id} 
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description} 
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
