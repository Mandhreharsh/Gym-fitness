import express from "express"
import{ Logout} from "../controller/userController.js";
import { login, Register} from "../controller/userController.js"

const router = express.Router();

router.post("/patient/register", Register);
router.post("/login", login);
router.get("/patient/logout", Logout);


export default router;
