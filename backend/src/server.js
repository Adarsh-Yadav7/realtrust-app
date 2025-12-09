// backend/src/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import projectRoutes from "./routes/projectRoutes.js";
import clientRoutes from "./routes/clientRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import subscriberRoutes from "./routes/subscriberRoutes.js";

dotenv.config();

const app = express();

// middlewares
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

// DB connect
connectDB();

// simple health route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// attach routes
app.use("/api/projects", projectRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/subscribers", subscriberRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
