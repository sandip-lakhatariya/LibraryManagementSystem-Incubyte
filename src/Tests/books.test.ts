import axios from "axios";
import Book from "../Models/books.model";

describe("Book Routes", () => {

    // beforeEach(async () => {
    //     // Clear the database before each test
    //     await Book.deleteMany({});
    // });

  it("should add a new book and return success response", async () => {

    const requestData = {
      isbn: "S123",
      title: "Incubyte Guide",
      author: "Incubyte",
      publication_year: 2020,
    };
    
    const apiUrl = "http://localhost:3001/test/addBook";

     // First request: Add the book successfully
     const response = await axios.post(apiUrl, requestData);
     expect(response.status).toBe(201);
     expect(response.data).toEqual({
       message: "Book added successfully"
     });

  });

  it("check for duplicate ISBN number", async () => {

    const requestData = {
      isbn: "S123",
      title: "Incubyte Guide",
      author: "Incubyte",
      publication_year: 2020,
    };
    
    const apiUrl = "http://localhost:3001/test/addBook";
 
     const response = await axios.post(apiUrl, requestData).catch((err) => err.response);
     expect(response.status).toBe(409);
     expect(response.data).toEqual({
       error: "ISBN must be unique. This ISBN already exists."
     });
  });

});
