import { Request, Response } from "express";
import Book from "../Models/books.model";

export const bookController = async (req: Request, res: Response) => {
    try {
  
      const { isbn, title, author, publication_year } = req.body;
  
      if (!isbn || !title || !author || !publication_year) {
        res.status(400).json({ error: "Invalid input data" });
        return;
      }
  
        const existingBook = await Book.findOne({ isbn });

        if (existingBook) {
            res.status(409).json({ 
                error: "ISBN must be unique. This ISBN already exists." 
            });
        }
        else{
            const book = new Book({ isbn, title, author, publication_year });
            const result = await book.save();
        
            if(result){
                res.status(201).json({
                    message: "Book added successfully",
                });
            }
        }
  
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

  export const borrowBook = async (req: Request, res: Response) => {
    try {
      const { isbn } = req.body;
  
      if (!isbn) {
        res.status(400).json({ error: "ISBN is required" });
      }
      else {
        const book = await Book.findOne({ isbn });
        if (!book) {
            res.status(404).json({ error: "Book not found" });
        }
        else if (book.isBorrowed) {
            res.status(409).json({ error: "Book is already borrowed" });
        }
        else {
            book.isBorrowed = true;
            await book.save();
        
            res.status(200).json({
                message: "Book borrowed successfully",
            });
        }
      }
  
    } catch (error) {
      console.error("Error borrowing book:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };