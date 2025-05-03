import express from "express"
import{ Logout} from "../controller/userController.js";
import { login, Register, verifyOtp} from "../controller/userController.js";
import { resendOtp } from "../controller/userController.js";

const router = express.Router();

router.post("/patient/register", Register);
router.post("/login", login);
router.get("/patient/logout", Logout);
router.post('/verify-otp', verifyOtp);

router.post("/resend-otp", resendOtp);


export default router;
