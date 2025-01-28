/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate replaces useHistory in v6+
import { AuthContext } from '../context/AuthContext';

const Logout = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate(); // Updated hook

  useEffect(() => {
    logout();
    navigate('/login'); // Navigate to the login page
  }, [logout, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-md w-80">
        <h2 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Logging out...</h2>
      </div>
    </div>
  );
};

export default Logout;

