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
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid OTP");
    }
  };

  return (
    <div className="w-[300px] mx-auto mt-[100px] text-white">
      <h2 className="text-2xl text-center mb-6">Verify OTP</h2>
      <form onSubmit={handleVerifyOtp} className="flex flex-col gap-4">
        <label htmlFor="otp">Enter OTP sent to {email}</label>
        <input
          type="text"
          id="otp"
          name="otp"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
          className="p-2 border border-gray-300 rounded bg-transparent text-white outline-none"
          placeholder="Enter 6-digit OTP"
        />
        <button
          type="submit"
          className="bg-[#D6D1CC] text-black font-semibold py-2 rounded"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default Otp;
