import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyOtp = () => {
  const { email } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ otp: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendSuccess, setResendSuccess] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setResendSuccess("");

    if (!formData.otp || formData.otp.length !== 6) {
      setError("OTP must be 6 digits");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/shop/verify-otp`,
        {
          email,
          otp: formData.otp,
        }
      );
      setSuccess(response.data.message);
      setTimeout(() => navigate(`/login`, { state: { registrationSuccess: true } }), 1500);
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setError("");
    setSuccess("");
    setResendSuccess("");
    setResendLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/shop/resend-otp`,
        { email }
      );
      setResendSuccess(response.data.message);
    } catch (error) {
      setError(error.response?.data?.message || "Failed to resend OTP");
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 px-4">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md text-black dark:text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Verify OTP</h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-md text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 p-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-md text-sm">
            {success}
          </div>
        )}

        {resendSuccess && (
          <div className="mb-4 p-3 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-md text-sm">
            {resendSuccess}
          </div>
        )}

        <form onSubmit={handleVerify} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              disabled
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 cursor-not-allowed"
            />
          </div>

          <div>
            <label htmlFor="otp" className="block text-sm font-medium mb-1">
              OTP
            </label>
            <input
              type="text"
              name="otp"
              id="otp"
              placeholder="Enter 6-digit OTP"
              maxLength={6}
              value={formData.otp}
              onChange={(e) =>
                setFormData({ ...formData, otp: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white py-2 rounded-md transition ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>

          <div className="text-center mt-4">
            <button
              type="button"
              onClick={handleResendOtp}
              disabled={resendLoading}
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline focus:outline-none"
            >
              {resendLoading ? "Sending..." : "Didn't receive OTP? Resend"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;