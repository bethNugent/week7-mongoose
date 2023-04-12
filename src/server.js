require("dotenv").config();
require("./db/connection");
// console.log(process.env.MONGO_URI);
const express = require("express");

const app = express();

app.use(express.json());


app.get("/books", (req, res) => {
    res.send("Hello World");
});

app.listen(5001, () => console.log("Server is listening"));