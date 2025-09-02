import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("API is running...");
});
export default app;
