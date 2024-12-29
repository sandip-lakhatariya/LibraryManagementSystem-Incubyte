import { Router } from "express";
import {bookController, borrowBook, returnBook} from "../Controllers/books.controller";

const router = Router();

router.post("/addBook", bookController);
router.post("/borrowBook", borrowBook);
router.post("/returnBook", returnBook);

export default router;
