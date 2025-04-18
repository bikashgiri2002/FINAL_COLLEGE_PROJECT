import React from "react";

const Resources = () => {
  return (
    <div className="bg-gradient-to-b from-[#FFD89E] to-[#FFF7E1] min-h-screen">
      <h1 className="text-center text-2xl font-bold mb-5">Resources</h1>

      {/* Get Started Block */}
      <div className="get-stated flex flex-col gap-5 md:flex-row">
        <div className="image md:w-2/5 w-full md:h-[18rem] p-1">
          <img
            src="/get-stated.png"
            alt="get-started page"
            className="h-full w-full rounded-2xl"
          />
        </div>
        <div className="md:w-3/5 w-full flex flex-col justify-center gap-2 p-2">
          <h2 className="text-2xl font-bold text-black">Get Started</h2>
          <p className="text-base text-gray-600 mt-5 break-words max-w-2xl">
            Registering your shop on Stokemate is a quick and hassle-free
            process designed to help you get started in no time. With just a few
            simple steps, you can create your store, list your products, and
            begin selling to a wide audience. The platform offers a
            user-friendly interface, making it easy for both new and experienced
            sellers to manage their business efficiently. Stokemate also
            provides helpful tools for inventory management, order tracking, and
            customer engagement. Start your journey today!
          </p>
        </div>
      </div>

      {/* Log In */}
      <div className="get-stated flex flex-col gap-5 md:flex-row-reverse">
        <div className="image md:w-2/5 w-full md:h-[18rem] p-1">
          <img
            src="/user-access.png"
            alt="login page"
            className="h-full w-full rounded-2xl"
          />
        </div>
        <div className="md:w-3/5 w-full flex flex-col justify-center gap-2 p-2">
          <h2 className="text-2xl font-bold text-black">Log In</h2>
          <p className="text-base text-gray-600 mt-5 break-words max-w-2xl">
            Once registered, log in using your credentials to access your
            dashboard. Our secure authentication ensures your data is protected.
            After logging in, you can manage your inventory, view insights, and
            start organizing your business operations.
          </p>
        </div>
      </div>

      {/* Add Warehouse */}
      <div className="get-stated flex flex-col gap-5 md:flex-row">
        <div className="image md:w-2/5 w-full md:h-[18rem] p-1">
          <img
            src="/ware-house-manage.png"
            alt="add warehouse page"
            className="h-full w-full rounded-2xl"
          />
        </div>
        <div className="md:w-3/5 w-full flex flex-col justify-center gap-2 p-2">
          <h2 className="text-2xl font-bold text-black">Add Warehouse</h2>
          <p className="text-base text-gray-600 mt-5 break-words max-w-2xl">
            Create one or multiple warehouses to organize your stock
            efficiently. You can define the location, assign warehouse managers,
            and set stock levels for accurate inventory tracking.
          </p>
        </div>
      </div>

      {/* Add Products */}
      <div className="get-stated flex flex-col gap-5 md:flex-row-reverse">
        <div className="image md:w-2/5 w-full md:h-[18rem] p-1">
          <img
            src="/inventory-manage.png"
            alt="add products page"
            className="h-full w-full rounded-2xl"
          />
        </div>
        <div className="md:w-3/5 w-full flex flex-col justify-center gap-2 p-2">
          <h2 className="text-2xl font-bold text-black">Add Products</h2>
          <p className="text-base text-gray-600 mt-5 break-words max-w-2xl">
            Add new products to your inventory by entering details such as name,
            SKU, price, quantity, and description. Categorize products to manage
            them more effectively across different warehouses.
          </p>
        </div>
      </div>

      {/* Modify Product */}
      <div className="get-stated flex flex-col gap-5 md:flex-row">
        <div className="image md:w-2/5 w-full md:h-[18rem] p-1">
          <img
            src="/customization.png"
            alt="modify product page"
            className="h-full w-full rounded-2xl"
          />
        </div>
        <div className="md:w-3/5 w-full flex flex-col justify-center gap-2 p-2">
          <h2 className="text-2xl font-bold text-black">Modify Product</h2>
          <p className="text-base text-gray-600 mt-5 break-words max-w-2xl">
            Easily update product information like price, quantity, or
            description as your business evolves. StockMate ensures that all
            changes reflect across your entire system instantly, keeping your
            inventory accurate.
          </p>
        </div>
      </div>

      {/* Footer */}
      {/* [Your existing footer remains unchanged here] */}
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

export default Resources;
