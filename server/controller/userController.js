import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { User } from "../models/userSchema.js";
import { generateToken } from "../utils/jwtToken.js";
import sendEmail from "../utils/sendEmail.js"; // email utility
import crypto from "crypto";

// ------------------ Register with OTP ------------------
export const Register = catchAsyncErrors(async (req, res, next) => {
    const { email, password, confirmPassword } = req.body;

    if (!email || !password || !confirmPassword) {
        return next(new ErrorHandler("Please fill the complete form", 400));
    }

    let user = await User.findOne({ email });

    if (user) {
        return next(new ErrorHandler("User already registered", 400));
    }

    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    user = await User.create({
        email,
        password,
        confirmPassword,
        otp,
        otpExpires: Date.now() + 5 * 60 * 1000, // 5 mins from now
    });

    // Send OTP email
    await sendEmail(email, `Your OTP is ${otp}`);

    res.status(200).json({
        success: true,
        message: "OTP sent to your email",
    });
});

// ------------------ Verify OTP ------------------
export const verifyOtp = catchAsyncErrors(async (req, res, next) => {
    const { email, otp } = req.body;

    if (!email || !otp) {
        return next(new ErrorHandler("Please provide email and OTP", 400));
    }

    const user = await User.findOne({ email });

    if (!user) {
        return next(new ErrorHandler("User not found", 404));
    }

    if (user.otp !== otp || user.otpExpires < Date.now()) {
        return next(new ErrorHandler("Invalid or expired OTP", 400));
    }

    // Clear OTP fields
    user.otp = undefined;
    user.otpExpires = undefined;
    await user.save();

    // Login now
    generateToken(user, "OTP verified successfully!", 200, res);
});

// ------------------ Login ------------------
export const login = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorHandler("Please provide all details", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorHandler("Invalid email or password", 400));
    }

    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid email or password", 400));
    }

    generateToken(user, "User logged in successfully", 200, res);
});

// ------------------ Logout ------------------
export const Logout = catchAsyncErrors(async (req, res, next) => {
    res.status(200)
        .cookie("patientToken", "", {
            httpOnly: true,
            expires: new Date(Date.now()),
        })
        .json({
            success: true,
            message: "User logged out successfully",
        });
});

