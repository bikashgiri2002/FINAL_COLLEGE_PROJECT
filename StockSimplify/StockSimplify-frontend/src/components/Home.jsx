// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import './Home.css';

function Home() {
  return (
    <div>
      <Nav />
      <br />
      <div className="p-4 sm:p-8 md:p-16 lg:p-28 ">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif">
          <span className="text-black-900">Innovative Stock Inventory </span>
          <br />
          <span className="text-emerald-500"> Solution for Seamless Operations.</span>
        </p>
        <br />
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-serif slide-text text-blue-600">Invest Smart, <span className="text-blue-600">Live Simplified.</span></p>
        <br />
        <div className="flex flex-wrap">
          <button className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
          <button className="mt-2 sm:mt-0 sm:ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Book a Demo</button>
        </div>
        <br />
        <br />
        <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl text-emerald-900">Trusted by 10,000+ Indian MSME Manufacturers</p>
      </div>
    </div>
  );
}

export default Home;
