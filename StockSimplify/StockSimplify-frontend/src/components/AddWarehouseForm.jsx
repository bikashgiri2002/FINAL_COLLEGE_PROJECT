/* eslint-disable react/prop-types */
import { useState } from 'react';

const AddWarehouseForm = ({ onWarehouseAdded }) => {
  const [location, setLocation] = useState('');
  const [capacity, setCapacity] = useState('');
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const warehouse = { location, capacity };

    // Send warehouse data to the backend (Replace the URL with your actual endpoint)
    const response = await fetch(`${apiUrl}/warehouse/add-warehouse`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(warehouse),
    });

    if (response.ok) {
      console.log('Warehouse added');
      onWarehouseAdded(); // Call the callback to refresh the list of warehouses
    } else {
      console.error('Error adding warehouse');
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Add Warehouse</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-200 mb-2">Location</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-200 mb-2">Capacity</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-green-500 dark:bg-green-700 text-white rounded"
        >
          Add Warehouse
        </button>
      </form>
    </div>
  );
};

export default AddWarehouseForm;
