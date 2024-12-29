import { Router } from "express";
import {bookController, borrowBook, returnBook, viewBooks} from "../Controllers/books.controller";

const router = Router();

router.post("/addBook", bookController);
router.post("/borrowBook", borrowBook);
router.post("/returnBook", returnBook);
router.get("/viewBooks", viewBooks);

export default router;
