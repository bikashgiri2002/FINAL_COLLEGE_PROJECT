// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Home.css"; 

function Home() {
  return (
    <div>
      <nav className="bg-indigo-100 p-4 rounded border-gray-800">
        <ul className="flex justify-between items-center text-black">
          <li className="flex items-center space-x-14">
            <img src="" alt="logo" className="h-8" />
            <span className="text-xl font-bold">StockSimplify</span>
          </li>
          <li className="flex space-x-6">
            <a href="#document" className="hover:text-gray-500">Documentation</a>
            <a href="#login" className="hover:text-gray-500">Login</a>
            <a href="#signup" className="hover:text-gray-500">SignUp</a>
          </li>
        </ul>
      </nav>
      <br></br>
      <div className='p-28'>
        <p className='text-4xl font-serif text-teal-900	pl-2 '>Where Simplicity Meets Strategy..</p>

      </div>
    </div>
  );
}

export default Home;
