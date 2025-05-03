import express from "express"
import{ Logout} from "../controller/userController.js";
import { login, Register, verifyOtp} from "../controller/userController.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/patient/register", Register);
router.post("/login", login);
router.get("/patient/logout", Logout);
router.post('/user/verify-otp', verifyOtp);


export default router;
