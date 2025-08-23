
import cors from 'cors'
import express, { json, urlencoded } from "express";
import * as dotenv from 'dotenv'
dotenv.config()
const app = express();
const PORT = process.env.PORT;
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors({
    'origin': '*',
}));

app.get('/', (req, res) => {
   return res.json({message : "well come to backend"});
    
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
