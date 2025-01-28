/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import AddWarehouseForm from './AddWarehouseForm';
import AddProductForm from './AddProductForm';
import UpdateInventoryForm from './UpdateInventoryForm';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const apiUrl = import.meta.env.VITE_API_URL;
  const [data, setData] = useState({ warehouses: [], inventory: [] });

  const fetchInventory = async () => {
    const response = await fetch(`${apiUrl}/inventory/user-inventory`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    if (response.ok) {
      const data = await response.json();
      setData(data);
    } else {
      console.error('Error fetching inventory');
    }
  };

  useEffect(() => {
    if (user) {
      fetchInventory();
    }
  }, [user, apiUrl]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <h1 className="text-3xl font-bold dark:text-gray-200 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <AddWarehouseForm onWarehouseAdded={fetchInventory} />
        </div>
        <div>
          <AddProductForm onProductAdded={fetchInventory} />
        </div>
        <div>
          <UpdateInventoryForm onInventoryUpdated={fetchInventory} />
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold dark:text-gray-200 mb-4">Inventory</h2>
        <div className="overflow-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-md">
            <thead>
              <tr>
                <th className="px-4 py-2 border dark:border-gray-700">Warehouse</th>
                <th className="px-4 py-2 border dark:border-gray-700">Product</th>
                <th className="px-4 py-2 border dark:border-gray-700">Quantity</th>
                <th className="px-4 py-2 border dark:border-gray-700">Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {data.inventory.map((item) => (
                <tr key={item._id}>
                  <td className="px-4 py-2 border dark:border-gray-700">{item.warehouseId.location}</td>
                  <td className="px-4 py-2 border dark:border-gray-700">{item.productId.productName}</td>
                  <td className="px-4 py-2 border dark:border-gray-700">{item.quantity}</td>
                  <td className="px-4 py-2 border dark:border-gray-700">{new Date(item.lastUpdated).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
