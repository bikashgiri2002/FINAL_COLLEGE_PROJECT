import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-[#FFD89E] to-[#FFF7E1] min-h-screen">
      <div
        className="h-screen bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: "url('/about-page.jpg')", // Replace with actual image path
        }}
      >
        <div className="text-center text-blue-950 p-8">
          <h1 className="text-4xl font-bold mb-4">
            Stockmate Inventory Management
          </h1>
          <p className="text-lg font-bold mb-6 max-w-lg">
            Stockmate is dedicated to revolutionizing inventory management,
            offering intelligent solutions that enhance efficiency, optimize
            business operations, and drive success across multiple locations.
          </p>
        </div>
      </div>

      {/* Scrolling Content Section */}
      <section className="container mx-auto px-10 py-10">
        <div className="text-center text-blue-950 p-8">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <div className="flex items-center justify-center">
            <p className="text-lg font-bold mb-8 max-w-4xl">
              Stockmate was born out of a simple yet powerful idea—to transform
              inventory management into a seamless, stress-free process. As
              businesses expanded, traditional tracking methods led to
              inefficiencies, costly errors, and lost revenue. Recognizing this
              challenge, Stockmate introduced a smart, intuitive system that
              streamlines operations across multiple locations, ensuring
              accuracy and control at every step. Today, Stockmate empowers
              companies with real-time tracking, automated adjustments, and
              insightful analytics, helping them make data-driven decisions.
              Designed for efficiency and growth, it is the trusted partner for
              businesses striving to optimize inventory and elevate their
              success in an ever-evolving market.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10">
          <div className="bg-blue-950 p-6 shadow-md rounded-md">
            <h3 className="text-xl font-bold text-white text-center">Mission</h3>
            <p className="text-white text-lg p-4 mt-6">
              Our mission at Stockmate is to transform inventory management into
              a seamless, intelligent, and efficient process. We aim to
              eliminate stock discrepancies, improve accuracy, and enhance
              business operations through automation and real-time tracking. By
              delivering cutting-edge technology and insightful analytics, we
              empower businesses to optimize inventory, reduce waste, and drive
              growth effortlessly. Stockmate is committed to providing reliable,
              scalable solutions that help companies stay ahead in a fast-moving
              market, ensuring success with smart, data-driven inventory
              management.
            </p>
          </div>
          <div className="bg-blue-950 p-6 shadow-md rounded-md">
            <h3 className="text-xl font-bold text-white text-center">Vision</h3>
            <p className="text-white text-lg p-4 mt-6">
              Our vision at Stockmate is to redefine inventory management with
              intelligent, automated, and scalable solutions that help
              businesses thrive in a rapidly evolving market. We aspire to
              create a seamless system that eliminates inefficiencies, enhances
              accuracy, and empowers companies to make data-driven decisions
              with confidence. By integrating innovative technology and
              real-time insights, we envision a future where businesses can
              focus on growth, efficiency, and sustainability—transforming
              inventory management into a competitive advantage for long-term
              success.
            </p>
          </div>
        </div>
      </section>

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

export default About;
