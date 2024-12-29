import mongoose, { Schema, Document } from "mongoose";

const bookSchema = new Schema(
  {
    isbn: {
      type: String,
      required: true,
      unique:true,
      trim: true
    },
    title: {
      type: String,
      required: true,
      trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
      },
    publication_year: {
        type: Number,
        required: true,
        trim: true
      },
  }
);

interface IBook extends Document {
  isbn: string;
  title: string;
  author: string;
  publication_year: number;
}

const Book = mongoose.model<IBook>("Book", bookSchema);

export default Book;
