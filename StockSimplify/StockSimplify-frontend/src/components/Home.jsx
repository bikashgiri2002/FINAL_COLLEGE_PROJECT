// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      <nav className="p-4 rounded outline">
        <ul className="flex justify-between items-center text-black">
          <li className="flex items-center space-x-8">
            <img src="" alt="logo" className="h-8" />
            <span className="text-xl font-bold">StockSimplify</span>
          </li>
          <li className="flex space-x-6">
            <a href="#document" className="hover:text-gray-500">Documentation</a>
            <a href="#Login" className="hover:text-gray-500">Login</a>
            <a href="#signup" className="hover:text-gray-500">SignUp</a>
          </li>
        </ul>
      </nav>
      <br />
      <div className="p-28">
        <p className="text-5xl font-serif">
          <span className="text-black-900">Innovative Stock Inventory </span>
          <br />
          <span className="text-emerald-500"> Solution for Seamless Operations.</span>
        </p>
        <br />
        <p className="text-xl font-serif text-blue-600">Invest Smart, <span className="text-blue-600">Live Simplified..</span> </p>
      <br></br>
      <button className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
        <button className="ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Book a Demo</button>
      </div>
      
    </div>
  );
}

export default Home;
