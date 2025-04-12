import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';
// import './responsive.css';


const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 border-b-1 pb-8">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleOpen}
      >
        <h2 className="font-bold text-xl text-blue-800">{question}</h2>
        <span className="text-gray-800 text-m">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && <p className="mt-2 text-black">{answer}</p>}
    </div>
  );
};

const Welcome = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // Redirect to login page
  };
  const faqData = [
    {
      question: 'What is StockMate?',
      answer:
        'StockMate is an intelligent inventory management solution designed to simplify operations, enhance tracking, and optimize stock management for businesses of all sizes.',
    },
    {
      question: 'How does StockMate handle multi-location inventory?',
      answer:
        'StockMate offers real-time tracking and management of inventory across multiple locations, ensuring accurate stock transfers and better visibility at each site.',
    },
    {
      question: 'Can I track inventory history?',
      answer:
        'Yes! With StockMate, you can effortlessly track sales and purchase history, enabling valuable insights and smarter decision-making for your business.',
    },
    {
      question: 'Is StockMate customizable?',
      answer:
        'Absolutely. StockMate is equipped with customizable features, ensuring it adapts to your unique business needs and scales effectively with your growth.',
    },
    {
      question: 'Does StockMate provide analytics?',
      answer:
        'Yes, our Reports & Analytics tools help businesses analyze trends, monitor performance, and make informed decisions based on comprehensive data insights.',
    },
  ];

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
          <div className="flex justify-between items-center mt-50 mr-85 ">
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
      <div className="flex justify-center mt-50 mr-50 ml-50">
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
          <div className="flex justify-between items-center mt-50 mr-85 ">
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
      <div className="flex justify-center mt-50 mr-50 ml-50">
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
          <div className="flex justify-center mt-50 mr-50 ml-50"> 
        <img  
              src="/alert.jpg"
              style={{
                maxWidth: '20%',
                borderRadius: '100px'
              }}
            />  </div>
           < div className='text-2xl font-bold text-black ml-10 mt-10'>
           Automated Alerts <br></br> 
              <p className="text-base text-gray-600 mt-5">
              Automated alerts in StockMate inventory  provide <br></br>real-time notifications for stock levels,
              reorders, and  <br></br>discrepancies,
              ensuring efficient and accurate inventory management
              </p>
            </div>
            <div className='text-4xl font-bold text-yellow-700 ml-10 mt-50'>Our customers love using StockMate <br></br> inventory</div>
            <div className='text-xl  text-black ml-10 mt-10'>Amit Sharma, Owner of FreshMart Grocery Store</div>
            <div className='text-xl  text-black ml-10 mt-5'>"StockMate has been a game-changer for my grocery shop.<br></br>
               I can now effortlessly display which products are in stock <br></br> and  which are out of stock,
               helping my customers make <br></br> informed choices before they visit the store.
               It's an <br></br>all-in-one platform that streamlines my daily <br></br> operations and keeps my customers happy!"</div>
               <div className='text-xl  text-black ml-220 mt-10'>
                <img src="/stockmate_icon.png" 
                  style={{
                     maxWidth:'15%',
                     borderRadius:'100PX',
                     backgroundColor : 'white'
                  }}
                />
               </div>
               <div className='text-3xl font-bold text-green-800 ml-10 mt-20'>Upgrade to an All-in-One Inventory Management Solution</div>
               <div className="flex justify-center mt-9">
               <button
              onClick={handleLoginClick}
              className="px-[72px] py-4 bg-red-700 text-white rounded-md hover:bg-green-400 text-lg mt-9"
               >
                Let's Check it!
               </button>
          </div>
        </div>
      </div>
       {/*Faq section*/ }
       <div className='flex justify-center mt-20 text-3xl font-bold'>
      Frequently Asked Questions </div>
      <div className="mt-10 mx-140 text-left">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
    </div>
    
  );
};

export default Welcome;  
