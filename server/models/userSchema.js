import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please provide a valid email"]
    },
    confirmPassword: {
        type: String,
        minLength: [8, "Password must contain 8 characters"],
        required: true,
        select: false,
    },
    password: {
        type: String,
        minLength: [8, "Password must contain 8 characters"],
        required: true,
        select: false,
    },
    doctorDepartment: {
        type: String,
    },
    docAvatar: {
        public_id: String,
        url: String
    },

    // 🔐 OTP fields
    otp: {
        type: String,
        select: false,
    },
    otpCreatedAt: {
        type: Date,
        select: false,
    },
});

// 🔐 Hash password before saving
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    this.confirmPassword = await bcrypt.hash(this.confirmPassword, 10);
});

// 🔐 Password comparison method
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// 🔐 JWT generation method
userSchema.methods.generateJsonWebToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES,
    });
};

// 🔐 OTP verification helper method
userSchema.methods.isOtpValid = function (enteredOtp) {
    if (!this.otp || !this.otpCreatedAt) return false;
    const now = new Date();
    const otpAge = (now - this.otpCreatedAt) / (1000 * 60); // in minutes
    return this.otp === enteredOtp && otpAge <= 5;
};

export const User = mongoose.model("User", userSchema);
