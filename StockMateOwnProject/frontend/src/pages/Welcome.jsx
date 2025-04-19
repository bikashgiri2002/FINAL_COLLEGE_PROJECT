import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="mb-4 border-b pb-4 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-lg text-gray-700">{question}</h4>
        <span className="text-gray-800">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <p className="mt-2 text-gray-600 break-words max-w-full">{answer}</p>
      )}
    </div>
  );
};

const Welcome = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => navigate("/login");

  const faqData = [
    {
      question: "What is StockMate?",
      answer:
        "StockMate is an intelligent inventory management solution designed to simplify operations, enhance tracking, and optimize stock management for businesses of all sizes.",
    },
    {
      question: "How does StockMate handle multi-location inventory?",
      answer:
        "StockMate offers real-time tracking and management of inventory across multiple locations, ensuring accurate stock transfers and better visibility at each site.",
    },
    {
      question: "Can I track inventory history?",
      answer:
        "Yes! With StockMate, you can effortlessly track sales and purchase history, enabling valuable insights and smarter decision-making for your business.",
    },
    {
      question: "Is StockMate customizable?",
      answer:
        "Absolutely. StockMate is equipped with customizable features, ensuring it adapts to your unique business needs and scales effectively with your growth.",
    },
    {
      question: "Does StockMate provide analytics?",
      answer:
        "Yes, our Reports & Analytics tools help businesses analyze trends, monitor performance, and make informed decisions based on comprehensive data insights.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#FFD89E] to-[#FFF7E1] min-h-screen">
      <div className="container mx-auto px-4 py-10">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-20 text-black">
            Empowering Your Business with Intelligent <br /> Inventory Solutions
          </h1>
          <h2 className="mt-6 text-lg sm:text-xl text-black">
            Manage your stock, orders, and business growth with ease using our
            free inventory solution.
          </h2>
          <div className="mt-8">
            <button
              onClick={handleLoginClick}
              className="px-8 py-4 bg-yellow-500 text-black rounded-md hover:bg-blue-400 text-lg"
            >
              Begin Exploring
            </button>
          </div>
          <img
            className="mt-12 mx-auto rounded-xl w-full max-w-[1200px]"
            src="/dashboard.png"
            alt="Dashboard Preview"
          />
        </div>

        {/* Tagline */}
        <div className="text-center mt-50">
          <h2 className="text-3xl md:text-3xl font-bold text-orange-800 break-words max-w-4xl mx-auto my-auto">
            StockMate simplifies inventory management by offering tailored
            features that streamline operations, enhance organization, and boost
            efficiency
          </h2>
        </div>

        {/* Features */}
        <div className="mt-50 space-y-20">
          {/* Each Feature */}
          {[
            {
              img: "/multi.jpg",
              alt: "Multi Location",
              title: "Multi-location management",
              text: "Effortlessly manage inventory across multiple locations with Stockmate. Gain real-time visibility, streamline stock transfers, and ensure accurate tracking at every site.",
              imgLeft: true,
            },
            {
              img: "/MARKET.png",
              alt: "Market",
              title: "Bundle Offerings",
              text: "Grouping and bundling items can enhance sales by creating appealing deals and boosting customer value, while also streamlining management and reducing waste.",
              imgLeft: false,
            },
            {
              img: "/istockphoto.jpg",
              alt: "History",
              title: "History Made Simple",
              text: "Track your sales and purchase history effortlessly with our intuitive system. Gain valuable insights into transactions to optimize your business decisions and grow smarter every day!",
              imgLeft: true,
            },
            {
              img: "/report.png",
              alt: "Report and Analytics",
              title: "Report and Analytics",
              text: "Unlock powerful insights with comprehensive Reports & Analytics tools. Analyze trends, track performance, and make data-driven decisions to propel your business forward.",
              imgLeft: false,
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row ${
                feature.imgLeft ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8`}
            >
              <img
                src={feature.img}
                className="w-full sm:w-3/4 md:w-2/3 lg:w-[40%] xl:w-[30%] rounded-xl"
                alt={feature.alt}
              />
              <div className="text-black text-center md:text-left max-w-xl">
                <h2 className="text-2xl font-bold">{feature.title}</h2>
                <p className="text-base text-gray-600 mt-5 break-words">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Alerts */}
        <div className="text-center mt-20">
          <img
            src="/alert.jpg"
            className="w-40 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 object-cover mx-auto rounded-full"
            alt="Alerts"
          />
          <h2 className="text-2xl font-bold text-black mt-8">
            Automated Alerts
          </h2>
          <p className="text-base text-gray-600 mt-5 break-words max-w-2xl mx-auto">
            Automated alerts in StockMate inventory provide real-time
            notifications for stock levels, reorders, and discrepancies,
            ensuring efficient and accurate inventory management.
          </p>
        </div>

        {/* Testimonial */}
        <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold text-yellow-700">
            Our customers love using StockMate inventory
          </h2>
          <p className="text-xl text-black mt-10 font-semibold">
            Amit Sharma, Owner of FreshMart Grocery Store
          </p>
          <p className="text-base text-black mt-5 max-w-3xl mx-auto break-words">
            "StockMate has been a game-changer for my grocery shop. I can now
            effortlessly display which products are in stock and which are out
            of stock, helping my customers make informed choices before they
            visit the store. It's an all-in-one platform that streamlines my
            daily operations and keeps my customers happy!"
          </p>
          <img
            src="/stockmate_icon.png"
            className="w-30 h-30 mt-10 rounded-full mx-auto my-auto"
            alt="Customer"
          />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-green-800">
            Upgrade to an All-in-One Inventory Management Solution
          </h2>
          <button
            onClick={handleLoginClick}
            className="px-16 py-4 bg-red-700 text-white rounded-md hover:bg-green-400 text-lg mt-9"
          >
            Let's Check it!
          </button>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto" id="faq">
          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-10 mt-20">
        <div className="container mx-auto px-6">
          {/* Company Information */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2 text-yellow-400">
              About StockMate
            </h3>
            <p className="text-sm text-gray-400">
              StockMate offers intelligent inventory management solutions to
              simplify business operations and optimize efficiency.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center space-x-6 mt-8 text-sm text-gray-400">
            <a href="/about" className=" hover:text-blue-500">
              About Us
            </a>
            <a href="/privacy-policy" className=" hover:text-blue-500">
              Privacy Policy
            </a>
            <a href="/terms" className=" hover:text-blue-500">
              Terms of Service
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mt-6">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              className="text-blue-600 hover:text-blue-800"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              className="text-blue-400 hover:text-blue-500"
            >
              <i className="fab fa-twitter"></i>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-blue-700 hover:text-blue-900"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              className="text-pink-600 hover:text-pink-800"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          {/* Contact Information */}
          <div className="text-center mt-8 text-sm text-gray-400">
            <p>
              Contact us:{" "}
              <a
                href="mailto:support@stockmate.com"
                className="text-yellow-400 hover:text-blue-500"
              >
                support@stockmate.com
              </a>
            </p>
            <p>Call us: (123) 456-7890</p>
          </div>

          {/* Newsletter Signup */}
          <div className="text-center mt-8">
            <h3 className="text-xl font-semibold text-yellow-400">
              Stay Updated
            </h3>
            <form className="flex justify-center items-center mt-4 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 text-gray-500 rounded-l-md w-full sm:w-auto sm:mr-2 bg-white"
              />
              <button className="p-2 bg-blue-600 text-white rounded-r-md w-full sm:w-auto">
                Subscribe
              </button>
            </form>
          </div>

          {/* Legal Information */}
          <div className="text-center mt-8 text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} StockMate. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Welcome;
