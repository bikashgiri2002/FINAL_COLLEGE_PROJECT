import { useState } from 'react';

const Register = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Shop Owner');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { username, email, password, role };
    console.log(user);

    // Send user data to the backend (Replace the URL with your actual endpoint)
    const response = await fetch(`${apiUrl}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      console.log('Registration successful');
      // Handle successful registration (e.g., redirect to login page)
    } else {
      console.log('Registration failed');
      // Handle registration error
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-md w-80">
        <h2 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-2">Username</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
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
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-2">Role</label>
            <select
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="Shop Owner">Shop Owner</option>
              <option value="Manager">Manager</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-green-500 dark:bg-green-700 text-white rounded"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
