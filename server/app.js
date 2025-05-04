import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import userRouter from "./router/userRouter.js";

const app = express();
config({ path: ".env" });

const allowedOrigins = [
  process.env.REACT_APP_ALLOWED_ORIGIN, 
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true, tempFileDir: "./tmp/" }));

// Routes
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);

// Root route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Connect DB and use error middleware
dbConnection();
app.use(errorMiddleware);

export default app;
