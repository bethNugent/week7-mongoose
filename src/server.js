//installs
require("dotenv").config();
require("./db/connection");
// console.log(process.env.MONGO_URI);

//packages
const express = require("express");

//book model
const Book = require("./books/model");



const app = express();

app.use(express.json());


// //GET
app.get("/books/getallbooks", async (req, res) => {
    // res.send("Hello World");
    try {

        const books= await Book.find({});
        // console.log("books: ", typeof books, books);
        const successResponse = {
            message: "success",
            books: books,
        };

    res.status(200).json(successResponse);
    } catch (error) {
        console.log(error)
    }
});


//POST
app.post("/books/addbook", async (req, res) => {
    // res.send("Hello from the book addbooks route");
    try {

        const newBook = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre
        });

        const successResponse = {
            message: "success",
            newBook: newBook,
        };

        res.status(201).json(successResponse); //201 means it's been added successfully compared to 200 which means you have recieved what you wanted to
    } catch (error) {
        console.log(error);
    }
});




app.listen(5001, () => console.log("Server is listening"));