import { useEffect, useState } from "react";
import axios from "axios";

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

  useEffect(() => {
    fetchInventory();
    fetchWarehouses();
  }, []);

  const fetchInventory = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/inventory", {
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
      const res = await axios.get("http://localhost:5000/api/warehouse", {
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
      await axios.post("http://localhost:5000/api/inventory", formData, {
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
      await axios.delete(`http://localhost:5000/api/inventory/${id}`, {
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
        `http://localhost:5000/api/inventory/${id}`,
        { quantity: newQuantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchInventory();
    } catch (error) {
      console.error("Error updating quantity", error);
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

      {/* Add Product Form */}
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

      {/* Inventory List Grouped by Warehouse */}
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
              <p className="text-gray-500 dark:text-gray-400">No products in this warehouse.</p>
            ) : (
              <ul className="space-y-2">
                {warehouse.items.map((item) => (
                  <li
                    key={item._id}
                    className="border p-3 rounded-md flex justify-between items-center dark:bg-gray-800 dark:border-gray-700"
                  >
                    <div>
                      <strong>{item.productName}</strong> (SKU: {item.sku}) -{" "}
                      {item.quantity} pcs - ₹{item.price}
                    </div>
                    <div className="flex space-x-2">
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
