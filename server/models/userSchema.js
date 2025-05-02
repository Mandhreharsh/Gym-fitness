import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please Provide a valid email"]
    },
    confirmPassword: {
        type: String,
        minLength: [8, "Password must contain 8 Character"],
        required: true,
        select: false,
    },
    password: {
        type: String,
        minLength: [8, "Password must contain 8 Character"],
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
});

userSchema.pre("save", async function (next){
    if(!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateJsonWebToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES
    });
};

export const User = mongoose.model("User", userSchema);