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

// ✅ Allowed origin (your deployed frontend domain)
const allowedOrigins = [
  "https://gym-fitness-hmjt.vercel.app"
];

// ✅ Dynamic CORS configuration
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./tmp/",
  })
);

// Routes
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
// app.use("/api/v1/appointment", appointmentRouter);

app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Connect DB
dbConnection();

// Error middleware
app.use(errorMiddleware);

export default app;
