import { Router } from "express";
import {bookController, borrowBook} from "../Controllers/books.controller";

const router = Router();

router.post("/addBook", bookController);
router.post("/borrowBook", borrowBook);

export default router;
