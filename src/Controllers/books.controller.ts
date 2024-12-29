import { Request, Response } from "express";
import Book from "../Models/books.model";

export const bookController = async (req: Request, res: Response) => {
    try {
  
      const { isbn, title, author, publication_year } = req.body;
  
      if (!isbn || !title || !author || !publication_year) {
        res.status(400).json({ error: "Invalid input data" });
        return;
      }
  
      console.log("Hello");

      const book = new Book({ isbn, title, author, publication_year });
      const result = await book.save();
  

      if(result){
          res.status(201).json({
              message: "Book added successfully",
          });
      }
  
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }