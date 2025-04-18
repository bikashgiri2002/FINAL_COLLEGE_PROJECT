import React from "react";

const Terms = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen pt-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Terms & Conditions
        </h1>

        <p className="mb-4">
          Welcome to <strong>StockMate</strong>. By accessing or using our
          platform, you agree to comply with and be bound by the following Terms
          and Conditions. Please read them carefully.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          1. Acceptance of Terms
        </h2>
        <p className="mb-4">
          By registering for and/or using StockMate, you agree to these terms.
          If you do not agree, do not use our service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          2. Account Responsibility
        </h2>
        <p className="mb-4">
          You are responsible for maintaining the confidentiality of your login
          credentials and all activities that occur under your account.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">3. Use of Services</h2>
        <p className="mb-4">
          You agree not to misuse our services or assist others in doing so.
          This includes unauthorized access, data scraping, or interfering with
          the system’s integrity.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          4. Subscription & Payments
        </h2>
        <p className="mb-4">
          If you subscribe to a paid plan, you agree to pay the fees and
          applicable taxes. Failure to pay may result in suspension or
          termination of your access.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">5. Termination</h2>
        <p className="mb-4">
          We may suspend or terminate your account if you violate these terms.
          You can also cancel your subscription at any time from your account
          settings.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          6. Limitation of Liability
        </h2>
        <p className="mb-4">
          StockMate is provided "as is" and we are not liable for any indirect,
          incidental, or consequential damages from your use of the platform.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          7. Changes to Terms
        </h2>
        <p className="mb-4">
          We reserve the right to update these terms at any time. Continued use
          of StockMate after changes constitutes your acceptance of the new
          terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">8. Contact</h2>
        <p className="mb-4">
          If you have any questions about these Terms & Conditions, please
          contact us at{" "}
          <a
            href="mailto:support@stockmate.com"
            className="text-blue-500 dark:text-blue-400 underline"
          >
            support@stockmate.com
          </a>
          .
        </p>

        <p className="mt-10 text-sm text-gray-600 dark:text-gray-400">
          Last updated: April 18, 2025
        </p>
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

export default Terms;
