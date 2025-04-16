import { useContext, useEffect, useState } from "react";
import ShopContext from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const { shop, logoutShop } = useContext(ShopContext);
  const navigate = useNavigate();
  const [warehouses, setWarehouses] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const [warehousesRes, inventoryRes] = await Promise.all([
          axios.get("http://localhost:5000/api/warehouse", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("http://localhost:5000/api/inventory", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);
        setWarehouses(warehousesRes.data);
        setInventory(inventoryRes.data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    logoutShop();
    navigate("/");
  };

  const getInventoryForWarehouse = (warehouseId) => {
    return inventory.filter((item) => item.warehouseId === warehouseId);
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-lg font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-extrabold text-blue-700 dark:text-blue-400">
          Hello, {shop?.name}
        </h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md shadow-sm dark:bg-red-700 dark:hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Warehouse Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {warehouses.map((warehouse) => (
          <div
            key={warehouse._id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border border-gray-200 dark:border-gray-700 transition-all min-h-[450px] flex flex-col"
          >
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                {warehouse.name}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                📍 {warehouse.location}
              </p>
              <p className="text-sm mt-1 text-gray-700 dark:text-gray-400">
                Capacity:{" "}
                <span className="font-medium">{warehouse.capacity} units</span>
              </p>
            </div>

            <h3 className="text-md font-semibold mb-2 text-gray-800 dark:text-gray-200">
              Inventory
            </h3>

            {getInventoryForWarehouse(warehouse._id).length > 0 ? (
              <div className="overflow-x-auto max-h-85 border rounded">
                <table className="min-w-full text-sm text-left bg-white dark:bg-gray-700 text-gray-800 dark:text-white">
                  <thead className="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 sticky top-0">
                    <tr>
                      <th className="px-3 py-2">Product</th>
                      <th className="px-3 py-2">SKU</th>
                      <th className="px-3 py-2">Qty</th>
                      <th className="px-3 py-2">Price</th>
                      <th className="px-3 py-2">Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getInventoryForWarehouse(warehouse._id).map((item) => (
                      <tr key={item._id} className="border-t dark:border-gray-600">
                        <td className="px-3 py-2">{item.productName}</td>
                        <td className="px-3 py-2">{item.sku}</td>
                        <td className="px-3 py-2">{item.quantity}</td>
                        <td className="px-3 py-2">₹{item.price}</td>
                        <td className="px-3 py-2">{item.category}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                No inventory available.
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
