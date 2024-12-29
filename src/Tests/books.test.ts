import axios from "axios";
import Book from "../Models/books.model";

describe("Book Routes", () => {

  it("should add a new book and return success response", async () => {

    const requestData = {
      isbn: "S123",
      title: "Incubyte Guide",
      author: "Incubyte",
      publication_year: 2020,
    };
    
    const apiUrl = "http://localhost:3001/test/addBook";

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

describe("Borrow Book API", () => {
  it("should allow borrowing a book", async () => {

    const borrowRequest = await axios.post("http://localhost:3001/test/borrowBook", {
      isbn: "S123",
    });

    expect(borrowRequest.status).toBe(200);
    expect(borrowRequest.data).toEqual({
      message: "Book borrowed successfully",
    });
  });

  it("should not allow borrowing an already borrowed book", async () => {
    const borrowRequest = await axios.post("http://localhost:3001/test/borrowBook", {
      isbn: "S123",
    }).catch((err) => err.response);

    expect(borrowRequest.status).toBe(409);
    expect(borrowRequest.data).toEqual({
      error: "Book is already borrowed",
    });
  });
});

describe("Return Book API", () => {
    const apiUrl = "http://localhost:3001/test/returnBook";
  
    it("should return a borrowed book successfully", async () => {

      const returnResponse = await axios.post(apiUrl, {
        isbn: "S123",
      });
  
      expect(returnResponse.status).toBe(200);
      expect(returnResponse.data).toEqual({
        message: "Book returned successfully",
      });
    });
  
    it("should fail to return a book that is not borrowed", async () => {
      const response = await axios.post(apiUrl, {
        isbn: "S123",
      }).catch((err) => err.response);
  
      expect(response.status).toBe(409);
      expect(response.data).toEqual({
        error: "Book is not borrowed, cannot return it",
      });
    });
  });

describe("View Books API", () => {
  const apiUrl = "http://localhost:3001/test/viewBooks";

  it("should return a list of available books", async () => {
    const response = await axios.get(apiUrl);

    expect(response.status).toBe(200);
    expect(response.data.message).toBe("Available books retrieved successfully");
    expect(Array.isArray(response.data.books)).toBe(true);
  });
});
