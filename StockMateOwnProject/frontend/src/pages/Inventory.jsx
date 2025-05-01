import { useEffect, useState } from "react";
import axios from "axios";

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
  const [quantityAdjustments, setQuantityAdjustments] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeWarehouse, setActiveWarehouse] = useState(null);

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
    if (isSubmitting) return;
    
    setIsSubmitting(true);
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
      setIsOpen(false);
      fetchInventory();
    } catch (error) {
      console.error("Error adding product", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && 
        formData.warehouseId && 
        formData.productName && 
        formData.sku && 
        formData.quantity && 
        formData.price && 
        formData.category) {
      handleAddProduct(e);
    }
  };

  const handleDeleteProduct = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const token = localStorage.getItem("token");
        await axios.delete(`${API_BASE_URL}/api/inventory/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchInventory();
      } catch (error) {
        console.error("Error deleting product", error);
      }
    }
  };

  const handleUpdateQuantity = async (id, newQuantity) => {
    if (newQuantity < 0) {
      alert("Quantity cannot be negative");
      return;
    }
    
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

  const handleQuantityAdjustment = (id, value) => {
    setQuantityAdjustments(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const applyQuantityAdjustment = async (id, currentQuantity) => {
    const adjustment = quantityAdjustments[id];
    if (!adjustment || isNaN(adjustment)) {
      alert("Please enter a valid number");
      return;
    }

    const newQuantity = currentQuantity + parseInt(adjustment);
    if (newQuantity < 0) {
      alert("Quantity cannot be negative");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `${API_BASE_URL}/api/inventory/${id}`,
        { quantity: newQuantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchInventory();
      setQuantityAdjustments(prev => {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      });
    } catch (error) {
      console.error("Error updating quantity", error);
    }
  };

  const handlePriceChange = (id, value) => {
    setPriceUpdates((prev) => ({ ...prev, [id]: value }));
  };

  const handleUpdatePrice = async (id) => {
    const newPrice = priceUpdates[id];
    if (!newPrice || isNaN(newPrice) || parseFloat(newPrice) <= 0) {
      alert("Please enter a valid price greater than 0.");
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

  const toggleWarehouse = (id) => {
    setActiveWarehouse(activeWarehouse === id ? null : id);
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Inventory Management</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Track and manage products across all warehouses
            </p>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            {isOpen ? "Cancel" : "Add Product"}
          </button>
        </div>

        {isOpen && (
          <form 
            onSubmit={handleAddProduct} 
            className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg space-y-4 border border-gray-200 dark:border-gray-700 animate-fade-in"
            onKeyDown={handleKeyDown}
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              Add New Product
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Warehouse
                </label>
                <select
                  name="warehouseId"
                  value={formData.warehouseId}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                >
                  <option value="">Select Warehouse</option>
                  {warehouses.map((warehouse) => (
                    <option key={warehouse._id} value={warehouse._id}>
                      {warehouse.name} - {warehouse.location}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Product Name
                </label>
                <input
                  type="text"
                  name="productName"
                  placeholder="e.g., Wireless Headphones"
                  value={formData.productName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  SKU
                </label>
                <input
                  type="text"
                  name="sku"
                  placeholder="e.g., WH-2023-BLK"
                  value={formData.sku}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  placeholder="0"
                  value={formData.quantity}
                  onChange={handleChange}
                  min="0"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Price (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500 dark:text-gray-400">₹</span>
                  <input
                    type="number"
                    name="price"
                    placeholder="0.00"
                    value={formData.price}
                    onChange={handleChange}
                    min="0"
                    step="0.01"
                    className="w-full pl-8 p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="e.g., Electronics"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                />
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Adding...
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    Add Product
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            Warehouse Inventory
          </h3>
          
          {groupedInventory.length === 0 ? (
            <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow text-center border border-gray-200 dark:border-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-600 dark:text-gray-400 mt-3">No warehouses found. Please add a warehouse first.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {groupedInventory.map((warehouse) => (
                <div key={warehouse._id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg">
                  <div 
                    className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-800 p-5 cursor-pointer"
                    onClick={() => toggleWarehouse(warehouse._id)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
                          </svg>
                          {warehouse.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                          {warehouse.location} • {warehouse.items.length} {warehouse.items.length === 1 ? 'product' : 'products'}
                        </p>
                      </div>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-5 w-5 text-gray-500 dark:text-gray-400 transform transition-transform duration-300 ${activeWarehouse === warehouse._id ? 'rotate-180' : ''}`} 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  {activeWarehouse === warehouse._id && (
                    <div className="p-5 border-t border-gray-200 dark:border-gray-700 animate-fade-in">
                      {warehouse.items.length === 0 ? (
                        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-center">
                          <p className="text-gray-500 dark:text-gray-400">No products in this warehouse.</p>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {warehouse.items.map((item) => (
                            <div
                              key={item._id}
                              className="border p-4 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 shadow-sm hover:shadow-md transition-all duration-300"
                            >
                              <div className="flex justify-between items-start mb-2">
                                <h5 className="font-bold text-lg text-gray-800 dark:text-white truncate">
                                  {item.productName}
                                </h5>
                                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                                  {item.category}
                                </span>
                              </div>
                              
                              <div className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                                <div className="flex items-center gap-2 mb-1">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                                  </svg>
                                  <span>SKU: {item.sku}</span>
                                </div>
                                <div className="flex items-center gap-2 mb-1">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                  </svg>
                                  <span>Stock: {item.quantity} pcs</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  <span>Price: ₹{item.price.toFixed(2)}</span>
                                </div>
                              </div>
                              
                              <div className="flex flex-wrap gap-2 mt-4">
                                {/* Quantity Adjustment Controls */}
                                <div className="flex items-center gap-2 w-full">
                                  <div className="flex items-center gap-1">
                                    <button
                                      onClick={() => handleUpdateQuantity(item._id, item.quantity - 1)}
                                      className="p-1.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-md hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                                      disabled={item.quantity <= 0}
                                    >
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                                      </svg>
                                    </button>
                                    <button
                                      onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)}
                                      className="p-1.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-md hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
                                    >
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                                      </svg>
                                    </button>
                                  </div>

                                  <div className="flex items-center gap-1 flex-1">
                                    <input
                                      type="number"
                                      value={quantityAdjustments[item._id] || ""}
                                      onChange={(e) => handleQuantityAdjustment(item._id, e.target.value)}
                                      placeholder="Adjust by"
                                      className="flex-1 p-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                    />
                                    <button
                                      onClick={() => applyQuantityAdjustment(item._id, item.quantity)}
                                      className="p-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                                    >
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                                      </svg>
                                    </button>
                                  </div>
                                </div>

                                {/* Price Update Controls */}
                                <div className="flex items-center gap-1 w-full">
                                  <input
                                    type="number"
                                    placeholder="New Price"
                                    value={priceUpdates[item._id] || ""}
                                    onChange={(e) => handlePriceChange(item._id, e.target.value)}
                                    min="0"
                                    step="0.01"
                                    className="flex-1 p-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-600 dark:text-white focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all"
                                  />
                                  <button
                                    onClick={() => handleUpdatePrice(item._id)}
                                    className="p-1.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-md hover:bg-yellow-200 dark:hover:bg-yellow-900/50 transition-colors"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                    </svg>
                                  </button>
                                </div>
                                
                                {/* Delete Button */}
                                <button
                                  onClick={() => handleDeleteProduct(item._id)}
                                  className="p-1.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors ml-auto"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inventory;