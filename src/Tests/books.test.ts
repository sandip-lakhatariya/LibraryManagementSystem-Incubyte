import axios from "axios";

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

});
