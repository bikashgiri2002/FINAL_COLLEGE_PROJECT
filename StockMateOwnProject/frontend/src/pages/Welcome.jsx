import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // Redirect to login page
  };

  return (
    <div>
      {/* Content Section */}
      <div
        className="flex-grow flex justify-center"
        style={{
          background: 'linear-gradient(to bottom,rgb(255, 216, 158), #FFF7E1)',
          minHeight: '100vh', // Ensure full viewport height
        }}
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold mt-[160px] text-black">
            Empowering Your Business with Intelligent <br />Inventory Solutions
          </h1> 
          <h1 className="mt-6 text-xl text-black">
            Manage your stock, orders, and business growth with ease using our free inventory solution.
          </h1>
          <div className="flex justify-center mt-4">
            <button
              onClick={handleLoginClick}
              className="px-[72px] py-4 bg-yellow-500 text-black rounded-md hover:bg-blue-400 text-lg mt-9"
            >
              Begin Exploring
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
