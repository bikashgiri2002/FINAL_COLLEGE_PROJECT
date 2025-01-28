// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

function Nav() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 540);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 540);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="p-4 border-b border-solid border-emerald-600 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src="" alt="logo" className="h-8" />
        <span className="text-lg sm:text-xl font-bold">StockSimplify</span>
      </div>
      {isMobile ? (
        <select
          className="w-20 p-2 pl-2 border rounded-full border-solid border-gray-500 text-black bg-emerald-400"
          onChange={(e) => {
            if (e.target.value) {
              window.location.href = e.target.value;
            }
          }}
        >
          <option value="">Menu</option>
          <option value="#document">Documentation</option>
          <option value="#Login">Login</option>
          <option value="#register">SignUp</option>
        </select>
      ) : (
        <ul className="flex space-x-6">
          <li><a href="#document" className="hover:text-gray-500 text-sm sm:text-base">Documentation</a></li>
          <li><a href="#Login" className="hover:text-gray-500 text-sm sm:text-base">Login</a></li>
          <li><a href="#register" className="hover:text-gray-500 text-sm sm:text-base">SignUp</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Nav;
