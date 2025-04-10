import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './responsive.css';

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
          <div className="flex justify-center mt-2">
            <button
              onClick={handleLoginClick}
              className="px-[72px] py-4 bg-yellow-500 text-black rounded-md hover:bg-blue-400 text-lg mt-9"
            >
              Begin Exploring
            </button>
          </div>
          <div className="flex justify-center mt-23">
            <img
              src="/dashboard.jpg"
              alt="Dashboard Preview"
              style={{
                maxWidth: '90%',
                maxHeight: '120%'
              }}
            />
          </div>
          <div className="flex justify-center mt-70 text-4xl font-bold text-orange-800">
            Stockmate transforms inventory management into a seamless 
            <br /> experience, combining efficiency with ease
          </div>
          <div className="flex justify-center mt-80 mr-50 ml-50">
            <img  
              src="/multi.jpg"
              style={{
                maxWidth: '30%',
              }}
            />  
            <div className='text-2xl font-bold text-black ml-30'>
              Multi-location management <br></br> 
              <p className="text-base text-gray-600 mt-5">
              Effortlessly manage inventory across multiple <br></br> locations 
              with  Stockmate. 
              Gain real-time <br></br>visibility, streamline stock transfers,<br></br>
               and ensure accurate tracking at every site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;  
