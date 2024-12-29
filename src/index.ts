import express from "express";
import bookRoutes from "./Routes/books.route";

const app = express();
const port = 3001;

require('./DBConnection/dbConnection');

app.use(express.json());
app.use("/test", bookRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
