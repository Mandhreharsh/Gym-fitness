import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Otp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const email = location.state?.email;

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://gym-fitness-2cj9.onrender.com/api/v1/user/verify-otp", {
        email,
        otp,
      });

      toast.success(res.data.message || "OTP verified successfully");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Verify OTP</h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Enter the 6-digit OTP sent to <span className="font-medium text-black">{email || "your email"}</span>
        </p>
        <form onSubmit={handleVerifyOtp} className="space-y-5">
          <input
            type="text"
            id="otp"
            name="otp"
            maxLength="6"
            pattern="\d{6}"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800 text-center text-lg tracking-widest"
            placeholder="------"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Verify OTP
          </button>
        </form>
        <p className="text-sm text-gray-500 text-center mt-6">
          Didn’t receive an OTP? <button className="text-indigo-600 hover:underline">Resend</button>
        </p>
      </div>
    </div>
  );
};

export default Otp;
