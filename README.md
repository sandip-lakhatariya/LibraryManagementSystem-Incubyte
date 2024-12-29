# Library Management API

This is a Node.js and Express-based API for managing a library system. It allows users to perform operations such as adding books, viewing available books, borrowing books, and returning them.
Whole project is done using Test Driven Development (TDD).

---

## Features

- **Add a Book**: Add new books to the library.
- **View Books**: View a list of all available (not borrowed) books.
- **Borrow a Book**: Mark a book as borrowed.
- **Return a Book**: Mark a borrowed book as returned.

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:
   ```bash
   cd LMS
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

---

## Endpoints

### Base URL: `http://localhost:3001`

### 1. Add a Book
- **Endpoint**: `/test/addBook`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "isbn": "S123",
    "title": "Incubyte Guide",
    "author": "Incubyte",
    "publication_year": 2020
  }
  ```
- **Responses**:
  - `201`: Book added successfully.
    ```json
    {
      "message": "Book added successfully"
    }
    ```
  - `409`: ISBN already exists.
    ```json
    {
      "error": "ISBN must be unique. This ISBN already exists."
    }
    ```

### 2. View Books
- **Endpoint**: `/test/viewBooks`
- **Method**: `GET`
- **Response**:
  - `200`: List of available books.
    ```json
    {
      "message": "Available books retrieved successfully",
      "books": [
        {
          "isbn": "S123",
          "title": "Incubyte Guide",
          "author": "Incubyte",
          "publication_year": 2020
        }
      ]
    }
    ```
  - `404`: No available books.
    ```json
    {
      "message": "No available books in the library"
    }
    ```

### 3. Borrow a Book
- **Endpoint**: `/test/borrowBook`
- **Method**: `PUT`
- **Request Body**:
  ```json
  {
    "isbn": "S123"
  }
  ```
- **Responses**:
  - `200`: Book borrowed successfully.
    ```json
    {
      "message": "Book borrowed successfully"
    }
    ```
  - `404`: Book not found or already borrowed.
    ```json
    {
      "error": "Book not available for borrowing"
    }
    ```

### 4. Return a Book
- **Endpoint**: `/test/returnBook`
- **Method**: `PUT`
- **Request Body**:
  ```json
  {
    "isbn": "S123"
  }
  ```
- **Responses**:
  - `200`: Book returned successfully.
    ```json
    {
      "message": "Book returned successfully"
    }
    ```
  - `404`: Book not found or not borrowed.
    ```json
    {
      "error": "Book not found or not borrowed"
    }
    ```

---

## Project Structure

```
.
├── Controllers
│   └── bookController.ts
├── Models
│   └── books.model.ts
├── Routes
│   └── bookRoutes.ts
├── server.ts
├── package.json
└── README.md
```

---

## Dependencies

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **Mongoose**: MongoDB object modeling tool.
- **dotenv**: Load environment variables from `.env` file.
- **Jest**: Testing framework.

---

## Testing

1. Run the tests:
   ```bash
   npm test
   ```

2. Example Test Case:
   ```typescript
   import axios from "axios";

   describe("Book Routes", () => {
     it("should add a new book and return success response", async () => {
       const requestData = {
         isbn: "S123",
         title: "Incubyte Guide",
         author: "Incubyte",
         publication_year: 2020,
       };

       const response = await axios.post("http://localhost:3001/test/addBook", requestData);

       expect(response.status).toBe(201);
       expect(response.data).toEqual({
         message: "Book added successfully",
       });
     });
   });
   ```
3. Test Report:
   
![Test Report](https://github.com/user-attachments/assets/26a4674e-7997-4bdf-ab7b-9e83cb626f53)

---

