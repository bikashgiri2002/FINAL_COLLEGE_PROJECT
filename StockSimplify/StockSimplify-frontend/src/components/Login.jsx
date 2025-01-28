import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const apiUrl = import.meta.env.VITE_API_URL;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };

    // Send user data to the backend
    const response = await fetch(`${apiUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      const data = await response.json();
      login(data.token); // Save user data to AuthContext
      console.log('Login successful');
      // Handle successful login (e.g., redirect to dashboard)
    } else {
      console.log('Login failed');
      // Handle login error
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-md w-80">
        <h2 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-2">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 dark:bg-blue-700 text-white rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
