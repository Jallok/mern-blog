import express from "express";
import { mongoose } from "mongoose";
import dotenv from "dotenv";

import userRoutes from "../api/routes/user.route.js";
import authRoutes from "../api/routes/auth.routh.js";

dotenv.config();

// koneksi ke monggose
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Mongodb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

// parsing json pada request body
app.use(express.json());

// menjalankan server di port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// eksekusi request
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// middleware handler error
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
