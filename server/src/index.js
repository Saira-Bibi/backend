
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import app from "./app.js";

const PORT = process.env.PORT || 5000;

dotenv.config({ path: "./.env" });


// Connect to database
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Database connection failed:", error);
        process.exit(1);
    });

