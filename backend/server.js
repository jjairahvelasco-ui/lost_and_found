import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

import itemRoutes from "./routes/itemRoutes.js";
import authRoutes from "./routes/authRoutes.js";

import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";

const app = express();

//////////////////////////////////////////////////////
// MIDDLEWARE
//////////////////////////////////////////////////////

app.use(express.json());

/*
  ✅ CORS FIX (IMPORTANT FOR VERCEL + RENDER)
  - Allows frontend to access backend
*/
app.use(
  cors({
    origin: "*", // 🔥 safest for now (no CORS errors)
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

//////////////////////////////////////////////////////
// DATABASE CONNECTION
//////////////////////////////////////////////////////
connectDB();

//////////////////////////////////////////////////////
// ROUTES
//////////////////////////////////////////////////////

app.use("/api/items", itemRoutes);
app.use("/api/auth", authRoutes);

//////////////////////////////////////////////////////
// TEST ROUTE
//////////////////////////////////////////////////////

app.get("/", (req, res) => {
  res.send("API is running...");
});

//////////////////////////////////////////////////////
// SWAGGER DOCS
//////////////////////////////////////////////////////

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//////////////////////////////////////////////////////
// START SERVER
//////////////////////////////////////////////////////

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});