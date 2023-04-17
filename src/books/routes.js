const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");

const { getAllBooks, addBook, updateBookAuthor, deleteBook, searchUpdate, getBookByTitle, deleteAllEntries, deleteOneBook } = require("./controllers");


//Refactoring

//use get to get all books
bookRouter.get("/books/getallbooks", getAllBooks);

//use post to add a book
bookRouter.post("/books/addbook", addBook);

//use put to update book author
bookRouter.put("/books/updatebookauthor", updateBookAuthor);

//use delete to delete a book
bookRouter.delete("/books/deletebook", deleteBook);

//use dynamic updates to search on a book name and update any field 
bookRouter.put('/books/searchandupdate', searchUpdate);

//use get to search a book by title
bookRouter.get("/books/getbookbytitle", getBookByTitle);

//use delelte to delete all entries 
bookRouter.delete("/books/deleteallentries", deleteAllEntries);

//use req.params to delete a single entry
bookRouter.delete("/books/deletebook/:title", deleteOneBook);


module.exports = bookRouter;
