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
          <div className="flex justify-center mt-28">
          <img
        src="/inventory-management.png"
       alt="Dashboard Preview"
        style={{
        width: '1100px',
        height: '590px'
         }}
        />
       </div>

       <div className='flex justify-center mt-40'>
      <h1 className='text-4xl font-bold text-orange-800'>StockMate simplifies inventory management by offering tailored features that<br></br> streamline operations, enhance organization, and boost efficiency</h1>
       </div>
          <div className="flex justify-center mt-80 mr-50 ml-50">
            <img  
              src="/multi.jpg"
              style={{
                maxWidth: '30%',
              }}
            />  
            <div className='text-2xl font-bold text-black ml-30 mt-10'>
              Multi-location management <br></br> 
              <p className="text-base text-gray-600 mt-5">
              Effortlessly manage inventory across multiple <br></br> locations 
              with  Stockmate. 
              Gain real-time <br></br>visibility, streamline stock transfers,<br></br>
               and ensure accurate tracking at every site.
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-80 mr-85 ">
          <div className="text-2xl font-bold text-black ml-120">
          <h2>Bundle Offerings</h2>
         <p className="text-base text-gray-600 mt-5 ">
          Grouping and bundling items can enhance sales<br />
         by creating appealing deals and boosting customer value,<br />
         while also streamlining management and reducing waste.
         </p>
       </div>
        <img
        src="/MARKET.png"
       style={{
         maxWidth: '30%',
         }}
        />
  
      </div>
      <div className="flex justify-center mt-80 mr-50 ml-50">
            <img  
              src="/istockphoto.jpg"
              style={{
                maxWidth: '30%',
              }}
            />  
            <div className='text-2xl font-bold text-black ml-40 mt-25'>
            History Made Simple <br></br> 
              <p className="text-base text-gray-600 mt-5">
              Track your sales and purchase history effortlessly<br></br> with our intuitive system. 
              Gain valuable insights <br></br> into transactions to optimize your business decisions <br></br> and grow smarter every day!
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-80 mr-85 ">
          <div className="text-2xl font-bold text-black ml-120">
          <h2>Role-Based Access Control</h2>
         <p className="text-base text-gray-600 mt-5 ">
         Implement robust Role-Based Access Control to ensure <br></br> secure and efficient management of user permissions. <br></br>
         Assign distinct roles like Admin, Manager, and  <br></br>Employee to streamline access and safeguard your operations.
         </p>
       </div>
        <img
        src="/Role-Based-Access-Control.jpeg"
       style={{
         maxWidth: '30%',
         }}
        />
      </div>
      <div className="flex justify-center mt-80 mr-50 ml-50">
            <img  
              src="/report.png"
              style={{
                maxWidth: '30%',
              }}
            />  
            <div className='text-2xl font-bold text-black ml-30 mt-10'>
            Reports & Analytics <br></br> 
              <p className="text-base text-gray-600 mt-5">
              Unlock powerful insights with comprehensive Reports & <br></br> Analytics tools. 
              Analyze trends, track performance, and  <br></br>make data-driven decisions to propel your business forward.
              </p>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Welcome;  
