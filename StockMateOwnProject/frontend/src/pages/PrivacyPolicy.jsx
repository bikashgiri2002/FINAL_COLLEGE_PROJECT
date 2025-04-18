import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen px-4 py-10 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4">
          At <strong>StockMate</strong>, your privacy is critically important to
          us. This Privacy Policy outlines how we collect, use, and protect your
          information when you use our inventory management platform.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          We collect personal information that you voluntarily provide during
          account creation, such as your name, email address, company name, and
          billing details. We may also collect usage data, logs, and device info
          to improve our services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>To operate and maintain your account</li>
          <li>To provide customer support and respond to inquiries</li>
          <li>To improve system performance and user experience</li>
          <li>To send important updates or promotional offers (opt-in only)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">3. Data Sharing</h2>
        <p className="mb-4">
          We do not sell or rent your data. We may share it with third-party
          services necessary to operate StockMate (e.g., payment processors,
          analytics tools) under strict confidentiality agreements.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">4. Data Security</h2>
        <p className="mb-4">
          We use industry-standard encryption and security protocols to protect
          your data. Access is restricted to authorized personnel only.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">5. Cookies</h2>
        <p className="mb-4">
          StockMate uses cookies to enhance your user experience. You can choose
          to disable cookies through your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">6. Your Rights</h2>
        <p className="mb-4">
          You have the right to access, update, or delete your personal data. To
          exercise these rights, please contact us at{" "}
          <a
            href="mailto:support@stockmate.com"
            className="text-blue-500 dark:text-blue-400 underline"
          >
            support@stockmate.com
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          7. Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. We’ll notify
          users of any significant changes via email or through our app.
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

export default PrivacyPolicy;
