import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import userRouter from "./router/userRouter.js";
// import appointmentRouter from "./router/appointmentRouter.js";

const app = express();
config({ path: "./config/config.env" });

// ✅ Define allowed origins (add more if needed)
const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:3000",
   "https://gym-fitness-hmjt-git-main-harshs-projects-30deba0c.vercel.app"
];

// ✅ Dynamic CORS middleware
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "./tmp/"
}));

// Routes
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
// app.use("/api/v1/appointment", appointmentRouter);

app.get("/", (req, res) => {
    res.send("Server is running...");
  });

dbConnection();

// Error Middleware
app.use(errorMiddleware);

export default app;
