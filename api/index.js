import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from "../api/routes/user.route.js";
import authRoutes from "../api/routes/auth.routh.js";

dotenv.config();

// Koneksi ke MongoDB
mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const app = express();

// Parsing JSON pada request body
app.use(express.json());

// Menjalankan server di port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Eksekusi request
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// Middleware untuk menangani error
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
