import React, { useState } from 'react';

const AddProductForm = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name,
      price: parseFloat(price),
      description,
    };

    addProduct(newProduct);

    setName('');
    setPrice('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Product</h2>

      <label htmlFor="name">Product Name:</label>
      <input 
        type="text" 
        id="name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />

      <label htmlFor="price">Price:</label>
      <input 
        type="number" 
        id="price" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
        required 
      />

      <label htmlFor="description">Description:</label>
      <textarea 
        id="description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        required 
      ></textarea>

      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
