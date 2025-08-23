import express from 'express';
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.json({message : "well come to backend"});
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
