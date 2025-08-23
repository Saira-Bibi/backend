import express from 'express';
import * as dotenv from 'dotenv'
dotenv.config()
const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.json({message : "well come to backend"});
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
