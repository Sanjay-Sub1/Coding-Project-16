import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import productList from './productList';

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - ${product.price.toFixed(2)}
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const AddProductForm = () => {
  return (
    <div>
      <h2>Add Product Form</h2>
      <p>Form goes here</p>
    </div>
  );
};

const App = () => {
  const products = [
    {
      id: 1,
      name: 'Pure 800 Turbo',
      price: 2500,
      description: 'A high-performance upgraded turbo for your BMW/Supra',
    },
    {
      id: 2,
      name: 'RaceWorks Port injection kit',
      price: 850,
      description: 'Fueling upgrade allowing to push more power out of your BMW/Supra',
    },
    {
      id: 3,
      name: 'AWE Catback Exhaust BMW 2 Series',
      price: 1350,
      description: 'Catback Exhaust upgrade for a BMW M240i/240i/230i, creating a nice tone while increasing power',
    },
  ];

  return (
    <div className="App">
      <h1>Performance Parts Dashboard</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;
