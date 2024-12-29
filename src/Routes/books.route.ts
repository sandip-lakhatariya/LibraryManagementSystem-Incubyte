import { Router } from "express";
import {bookController} from "../Controllers/books.controller";

const router = Router();

router.post("/addBook", bookController);

export default router;
