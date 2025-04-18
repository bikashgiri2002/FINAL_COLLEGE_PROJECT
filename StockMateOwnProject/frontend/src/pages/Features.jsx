import React from "react";

const Features = () => {
  return (
    <div className="bg-gradient-to-b from-[#FFD89E] to-[#FFF7E1] min-h-screen sm:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <img
          src="/multi.jpg"
          alt="multi"
          className="h-[250px] md:h-[350px] w-full max-w-sm md:max-w-lg rounded-lg shadow-lg"
        ></img>
        <div className="text-center lg:text-left">
          <h1 className="font-bold text-2xl text-blue-950 mt-1">
            Multi-location management
          </h1>
          <p className="max-w-lg text-sm md:text-lg text-blue-950 mt-4">
            Efficiently manage inventory across multiple locations with
            Stockmate's seamless multi-location tracking. Keep stock levels
            updated in real time, transfer items between branches effortlessly,
            and receive location-specific alerts to prevent shortages. Generate
            insightful reports for each warehouse or store, ensuring balanced
            inventory distribution. Simplify operations by assigning
            location-based managers and automating stock adjustments for optimal
            efficiency.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse gap-10 items-center mt-10">
        <img
          src="/MARKET.png"
          alt="market"
          className="h-[250px] md:h-[350px] w-full max-w-sm md:max-w-lg rounded-lg shadow-lg"
        />
        <div className="text-center lg:text-left">
          <h1 className="font-bold text-xl md:text-2xl text-blue-950 mt-1">
            Bundle Offerings
          </h1>
          <p className="max-w-lg text-sm md:text-lg text-blue-950 mt-4">
            Enhance sales and streamline inventory with Stockmate’s Bundle
            Offering feature. Effortlessly group related products into
            attractive bundles, ensuring better value for customers while
            optimizing stock management. Track bundle sales, automate stock
            deductions, and adjust pricing dynamically to boost profitability.
            Improve customer engagement with curated package deals and maintain
            seamless inventory control across multiple locations. Simplify
            operations and maximize revenue effortlessly!
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 items-center mt-10">
        <img
          src="/istockphoto.jpg"
          alt="istock"
          className="h-[250px] md:h-[350px] w-full max-w-sm md:max-w-lg rounded-lg shadow-lg"
        ></img>
        <div className="text-center lg:text-left">
          <h1 className="font-bold text-2xl text-blue-950 mt-1">
            History Made Simple
          </h1>
          <p className="max-w-lg text-sm md:text-lg text-blue-950 mt-4">
            Effortlessly track past transactions and inventory changes with
            Stockmate’s History Made Simple feature. Instantly access detailed
            records of stock movements, sales, and adjustments across multiple
            locations. Generate reports with just a click, ensuring transparency
            and accuracy. Simplify audits, improve decision-making, and maintain
            a reliable inventory history—all in an easy-to-navigate interface
            designed for efficiency. Stay organized and in control at all times!
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse gap-10 items-center mt-10">
        <img
          src="/report.png"
          alt="market"
          className="h-[250px] md:h-[350px] w-full max-w-sm md:max-w-lg rounded-lg shadow-lg"
        ></img>
        <div className="text-center lg:text-left">
          <h1 className="font-bold text-xl md:text-2xl text-blue-950 mt-1">
            Reports & Analytics
          </h1>
          <p className="max-w-lg text-sm md:text-lg text-blue-950 mt-4">
            Gain valuable insights into your inventory with Stockmate’s Reports
            & Analytics feature. Track sales trends, monitor stock movements,
            and analyze performance across multiple locations in real time.
            Generate detailed reports with ease, helping you optimize purchasing
            decisions and reduce waste. Make data-driven choices, improve
            efficiency, and stay ahead in inventory management with smart,
            automated analytics tailored for your business success.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 items-center mt-10">
        <img
          src="/email-varification.webp"
          alt="email-verification"
          className="h-[250px] md:h-[350px] w-full max-w-sm md:max-w-lg rounded-lg shadow-lg"
        ></img>
        <div className="text-center lg:text-left">
          <h1 className="font-bold text-2xl text-blue-950 mt-1">
            Email Verification
          </h1>
          <p className="max-w-lg text-sm md:text-lg text-blue-950 mt-4">
            Ensure secure access and reliable communication with Stockmate’s
            Email Verification feature. Verify user emails to prevent
            unauthorized access, protect sensitive inventory data, and enhance
            platform security. Email verification helps reduce fraud, ensures
            legitimate user registration, and improves account recovery.
            Strengthen trust and safeguard business operations by confirming
            user identities before granting system access. A secure inventory
            starts with verified users!
          </p>
        </div>
      </div>

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

export default Features;
