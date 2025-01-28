/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const AddNewProductForm = ({ onProductAdded }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { productName, description, category };

    // Send product data to the backend
    const response = await fetch(`${apiUrl}/products/add-product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(product),
    });

    if (response.ok) {
      console.log('Product added successfully');
      onProductAdded(); // Call the callback to refresh the product list
    } else {
      console.error('Error adding product');
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-200 mb-2">Product Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-200 mb-2">Description</label>
          <textarea
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-200 mb-2">Category</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 dark:bg-blue-700 text-white rounded"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

AddNewProductForm.defaultProps = {
  onProductAdded: () => {},
};

export default AddNewProductForm;
