import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ShopContext from "../context/ShopContext";

const Login = () => {
  const { loginShop } = useContext(ShopContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/shop/login", { email, password });
      loginShop(response.data.shop, response.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <form
        onSubmit={handleLogin}
        className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 shadow-md rounded w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Shop Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white p-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
