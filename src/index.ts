import express from "express";

const app = express();
const port = 3001;

require('./DBConnection/dbConnection');

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
