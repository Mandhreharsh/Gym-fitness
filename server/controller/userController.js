import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { User } from "../models/userSchema.js";
import { generateToken } from "../utils/jwtToken.js"

export const Register = catchAsyncErrors(async (req, res, next) => {
    const { 
        email, 
        confirmPassword, 
        password
     } = req.body;
    if ( 
        !email|| 
        !confirmPassword||  
        !password
    ){
        return next(new ErrorHandler("Please Fill Full Form", 400));
    }
    let user = await User.findOne({email});
    if (user){
        return next(new ErrorHandler("User Already Registered", 400));
    }
    user = await User.create({
        email, 
        confirmPassword,
        password
    });
    generateToken(user, "User Registered", 200, res);
});

export const login = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password ) {
        return next(new ErrorHandler("Please Provide all Details", 400));
    }
    const user = await User.findOne({email}).select("+password");
    if(!user){
        return next(new ErrorHandler("Invalid Password Or Email", 400));
    }
    const isPaasswordMatched = await user.comparePassword(password);
    if(!isPaasswordMatched){
        return next(new ErrorHandler(" Password Or Email", 400));
    }
    generateToken(user, "User Logged In successfully!", 200, res);
});


export const Logout = catchAsyncErrors(async (req, res, next) =>{
    res.status(200)
    .cookie("patientToken", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
    }).json({
        sucess: true,
        message: "User Logged out successfully",
    });
 });
