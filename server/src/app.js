import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(express.static("public"))//image files
app.use(cookieParser());
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("API is running...");
});

export default app;
