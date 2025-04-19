import { useEffect, useState } from "react";
import axios from "axios";

// Use Vite environment variable
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [formData, setFormData] = useState({
    warehouseId: "",
    productName: "",
    sku: "",
    quantity: "",
    price: "",
    category: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [priceUpdates, setPriceUpdates] = useState({});

  useEffect(() => {
    fetchInventory();
    fetchWarehouses();
  }, []);

  const fetchInventory = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${API_BASE_URL}/api/inventory`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setInventory(res.data);
    } catch (error) {
      console.error("Error fetching inventory", error);
    }
  };

  const fetchWarehouses = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${API_BASE_URL}/api/warehouse`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setWarehouses(res.data);
    } catch (error) {
      console.error("Error fetching warehouses", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(`${API_BASE_URL}/api/inventory`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFormData({
        warehouseId: "",
        productName: "",
        sku: "",
        quantity: "",
        price: "",
        category: "",
      });
      fetchInventory();
    } catch (error) {
      console.error("Error adding product", error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_BASE_URL}/api/inventory/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchInventory();
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  const handleUpdateQuantity = async (id, newQuantity) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `${API_BASE_URL}/api/inventory/${id}`,
        { quantity: newQuantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchInventory();
    } catch (error) {
      console.error("Error updating quantity", error);
    }
  };

  const handlePriceChange = (id, value) => {
    setPriceUpdates((prev) => ({ ...prev, [id]: value }));
  };

  const handleUpdatePrice = async (id) => {
    const newPrice = priceUpdates[id];
    if (!newPrice || isNaN(newPrice)) {
      alert("Please enter a valid price.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      await axios.patch(
        `${API_BASE_URL}/api/inventory/${id}/price`,
        { price: parseFloat(newPrice) },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchInventory();
      setPriceUpdates((prev) => {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      });
    } catch (error) {
      console.error("Error updating price", error);
    }
  };

  const groupedInventory = warehouses.map((warehouse) => ({
    ...warehouse,
    items: inventory.filter((item) => item.warehouseId === warehouse._id),
  }));

  return (
    <div className="p-6 bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Manage Inventory</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800"
        >
          Add Inventory
        </button>
      </div>

      {isOpen && (
        <form onSubmit={handleAddProduct} className="mb-6 space-y-3">
          <select
            name="warehouseId"
            value={formData.warehouseId}
            onChange={handleChange}
            className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            required
          >
            <option value="">Select Warehouse</option>
            {warehouses.map((warehouse) => (
              <option key={warehouse._id} value={warehouse._id}>
                {warehouse.name} - {warehouse.location}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="productName"
            placeholder="Product Name"
            value={formData.productName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            required
          />
          <input
            type="text"
            name="sku"
            placeholder="SKU"
            value={formData.sku}
            onChange={handleChange}
            className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            required
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Add Product
          </button>
        </form>
      )}

      <h3 className="text-xl font-semibold mb-3">Inventory by Warehouse</h3>

      {groupedInventory.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">No warehouses found.</p>
      ) : (
        groupedInventory.map((warehouse) => (
          <div key={warehouse._id} className="mb-6">
            <h4 className="text-lg font-bold mb-2">
              {warehouse.name} ({warehouse.location})
            </h4>
            {warehouse.items.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400">
                No products in this warehouse.
              </p>
            ) : (
              <ul className="space-y-2">
                {warehouse.items.map((item) => (
                  <li
                    key={item._id}
                    className="border p-3 rounded-md flex flex-col md:flex-row md:justify-between md:items-center dark:bg-gray-800 dark:border-gray-700"
                  >
                    <div className="mb-2 md:mb-0">
                      <strong>{item.productName}</strong> (SKU: {item.sku}) -{" "}
                      {item.quantity} pcs - ₹{item.price}
                    </div>

                    <div className="flex flex-wrap gap-2 items-center">
                      <button
                        className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
                        onClick={() =>
                          handleUpdateQuantity(item._id, item.quantity + 1)
                        }
                      >
                        +1
                      </button>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                        onClick={() =>
                          handleUpdateQuantity(item._id, item.quantity - 1)
                        }
                      >
                        -1
                      </button>
                      <input
                        type="number"
                        placeholder="New Price"
                        value={priceUpdates[item._id] || ""}
                        onChange={(e) =>
                          handlePriceChange(item._id, e.target.value)
                        }
                        className="w-24 p-1 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                      <button
                        className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600"
                        onClick={() => handleUpdatePrice(item._id)}
                      >
                        Update Price
                      </button>
                      <button
                        className="bg-gray-600 text-white px-3 py-1 rounded-md hover:bg-gray-700"
                        onClick={() => handleDeleteProduct(item._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Inventory;
