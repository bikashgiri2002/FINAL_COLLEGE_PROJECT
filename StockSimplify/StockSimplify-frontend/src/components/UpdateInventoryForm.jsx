/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const UpdateInventoryForm = ({ onInventoryUpdated }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [inventoryId, setInventoryId] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inventory = { inventoryId, quantity };

    // Send inventory data to the backend
    const response = await fetch(`${apiUrl}/inventory/update-inventory`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(inventory),
    });

    if (response.ok) {
      console.log('Inventory updated');
      onInventoryUpdated(); // Call the callback to refresh the inventory
    } else {
      console.error('Error updating inventory');
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Update Inventory</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-200 mb-2">Inventory ID</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
            value={inventoryId}
            onChange={(e) => setInventoryId(e.target.value)}
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
          className="w-full p-2 bg-blue-500 dark:bg-blue-700 text-white rounded"
        >
          Update Inventory
        </button>
      </form>
    </div>
  );
};

export default UpdateInventoryForm;
