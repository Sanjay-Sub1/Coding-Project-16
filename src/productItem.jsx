import React from 'react';

const ProductItem = ({ id, name, price, description }) => {
  return (
    <li>
      <h3>{name}</h3>
      <p>Price: ${price.toFixed(2)}</p>
      <p>{description}</p>
    </li>
  );
};

export default ProductItem;
