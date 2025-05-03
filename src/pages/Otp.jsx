import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Otp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputsRef = useRef([]);
  const [resendTimer, setResendTimer] = useState(0);
  const email = location.state?.email;

  useEffect(() => {
    let interval;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  const handleChange = (element, index) => {
    const value = element.value.replace(/\D/, "");
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      if (otp[index]) {
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("Text").trim().slice(0, 6).replace(/\D/g, "");
    if (pastedData.length === 6) {
      const newOtp = [...otp];
      for (let i = 0; i < 6; i++) {
        newOtp[i] = pastedData[i];
        if (inputsRef.current[i]) {
          inputsRef.current[i].value = pastedData[i];
        }
      }
      setOtp(newOtp);
      inputsRef.current[5]?.focus();
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const fullOtp = otp.join("");

    try {
      const res = await axios.post("https://gym-fitness-2cj9.onrender.com/api/v1/user/verify-otp", {
        email,
        otp: fullOtp,
      });

      toast.success(res.data.message || "OTP verified successfully");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid OTP");
    }
  };

  const handleResendOtp = async () => {
    try {
      const res = await axios.post("https://gym-fitness-2cj9.onrender.com/api/v1/user/resend-otp", {
        email,
      });
  
      toast.success(res.data.message);
      if (res.data.message.includes("New OTP sent")) {
        setResendTimer(30); // Disable resend button only if OTP is sent
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to resend OTP");
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-tl from-[#12100e] to-[#3d3d3d]">
      <div className="bg-white rounded-md shadow-lg p-6 sm:p-8 w-full max-w-sm sm:max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Verify OTP</h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Enter the 6-digit OTP sent to <span className="font-medium text-black">{email || "your email"}</span>
        </p>
        <form onSubmit={handleVerifyOtp} className="space-y-5">
          <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength="1"
                value={digit}
                ref={(el) => (inputsRef.current[index] = el)}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={index === 0 ? handlePaste : undefined}
                autoComplete={index === 0 ? "one-time-code" : undefined}
                className="otp-input w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-center border border-gray-300 rounded-md text-base sm:text-lg md:text-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full bg-[#D6D1CC] hover:bg-[#D2C7BB] text-black font-semibold py-3 rounded-lg transition duration-200"
          >
            Verify OTP
          </button>
        </form>
        <p className="text-sm text-gray-500 text-center mt-6">
          Didn’t receive an OTP?{" "}
          <button
            className={`text-black hover:underline disabled:opacity-50`}
            onClick={handleResendOtp}
            disabled={resendTimer > 0}
          >
            Resend {resendTimer > 0 ? `(${resendTimer}s)` : ""}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Otp;
