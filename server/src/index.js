/*import cors from 'cors'
import express, { json, urlencoded } from "express";
import * as dotenv from 'dotenv'

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000; // fallback 5000

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors({
    origin: '*',
}));

app.get('/', (req, res) => {
   return res.json({ message : "welcome to backend" });
});

app.listen(PORT, () => console.log(` Server running on port ${PORT}`));*/





import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("API is running...");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
