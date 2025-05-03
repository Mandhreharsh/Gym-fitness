import jwt from "jsonwebtoken";
import { User } from "../models/userSchema.js";
import ErrorHandler from "./errorMiddleware.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
    const token = req.cookies.patientToken;

    if (!token) {
        return next(new ErrorHandler("Please login to access this resource", 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded._id);
    next();
});
