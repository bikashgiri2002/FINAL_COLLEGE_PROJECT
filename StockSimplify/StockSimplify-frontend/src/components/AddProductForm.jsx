/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const AddProductForm = ({ onProductAdded }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [warehouseId, setWarehouseId] = useState('');
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    // Fetch the warehouses for the logged-in user
    const fetchWarehouses = async () => {
      const response = await fetch(`${apiUrl}/inventory/user-warehouses`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setWarehouses(data.warehouses);
      } else {
        console.error('Error fetching warehouses');
      }
    };

    fetchWarehouses();
  }, [apiUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { warehouseId, productId, quantity };

    // Send product data to the backend
    const response = await fetch(`${apiUrl}/inventory/add-product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(product),
    });

    if (response.ok) {
      console.log('Product added to inventory');
      onProductAdded(); // Call the callback to refresh the inventory
    } else {
      console.error('Error adding product to inventory');
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-200 mb-2">Warehouse</label>
          <select
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
            value={warehouseId}
            onChange={(e) => setWarehouseId(e.target.value)}
            required
          >
            <option value="">Select Warehouse</option>
            {warehouses.map((warehouse) => (
              <option key={warehouse._id} value={warehouse._id}>
                {warehouse.location}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-200 mb-2">Product ID</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-200 mb-2">Quantity</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-green-500 dark:bg-green-700 text-white rounded"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
