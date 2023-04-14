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

// //GET --------- READ
app.get("/books/getallbooks", async (req, res) => {
  // res.send("Hello World");
  try {
    const books = await Book.find({});
    // console.log("books: ", typeof books, books);
    const successResponse = {
      message: "success",
      books: books,
    };

    res.status(200).json(successResponse);
  } catch (error) {
    console.log(error);
  }
});

//POST ------CREATE
app.post("/books/addbook", async (req, res) => {
  // res.send("Hello from the book addbooks route");
  try {
    const newBook = await Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
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

//PUT REQUEST ---------UPDATE
// app.put("/books/updatebookauthor", async (req, res) => {
//     // res.send("Hello from the book update route");
//     try {
   
//         const updatedBook = await Book.updateOne (
//             { title: 'Kitty Cats' },
//             { author: 'Ralph W' }
//         );

//       const successResponse = {
//         message: "success",
//         updatedBook: updatedBook,
//       };

//       res.status(201).json(successResponse); //201 means it's been added successfully compared to 200 which means you have recieved what you wanted to
//     } catch (error) {
//       console.log(error);
//     }
//     });


//PUT REQUEST ---------UPDATE
// app.put("/books/updatebookauthor", async (req, res) => {
//     // res.send("Hello from the book update route");
//     try {
   
//         const updatedBook = await Book.updateOne (
//             { title: req.body.title },
//             { author: req.body.newAuthor }
//         );

//       const successResponse = {
//         message: "success",
//         updatedBook: updatedBook,
//       };

//       res.status(201).json(successResponse); //201 means it's been added successfully compared to 200 which means you have recieved what you wanted to
//     } catch (error) {
//       console.log(error);
//     }
//     });



// app.put("/books/updatebookauthor/6437c535642cf270f3da880e", async (req, res) => {
//     // res.send("Hello from the book update route");
//     try {
//       const updatedBook = await Book.findByIdAndUpdate(
//         req.params.id,
//         {
//           $set: { author: req.body.author },
//         },
//         { new: true }
//       );

//       const successResponse = {
//         message: "success",
//         updatedBook: updatedBook,
//       };

//       res.status(201).json(successResponse); //201 means it's been added successfully compared to 200 which means you have recieved what you wanted to
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

//DELETE REQUEST ---------DELETE
app.delete("/books/deletebook", async (req, res) => {
//   res.send("Hello from the delete route");
  try {
    const deletedBook = await Book.deleteOne(
    { title: req.body.title });

    const successResponse = {
      message: "successfully deleted",
      deletedBook: deletedBook,
    };

    res.status(201).json(successResponse); //201 means it's been added successfully compared to 200 which means you have recieved what you wanted to
  } catch (error) {
    console.log(error);
  }
});




//STRETCH GOALS -----------------1,2,3...


//USE DYNAMIC UPDATES TO SEARCH ON A BOOK NAME AND UPDATE ANY FIELD

app.put('/books/searchandupdate', async (req, res) => {
//   res.send("Hello from search and update using put route");

    try {

        const searchAndUpdate = await Book.updateOne(
            { title: req.body.title },
            { [req.body.key] : req.body.value }
            );

        const successResponse = {
            message: "successfully searched and updated",
            searchAndUpdate: searchAndUpdate,
            };
          

      res.status(201).json(successResponse); //201 means it's been added successfully compared to 200 which means you have recieved what you wanted to
    } catch (error) {
      console.log(error);
    }
  });


  //in json 
//   {
//     "title": "Gotta Get Theroux This: My Life and Strange Times in Television",
//     "key": "genre",
//     "value": "Aito-biograpgy/Biography"
// }




//FIND A SINGLE BOOK BY THE TITLE

// //GET --------- READ
app.get("/books/getbookbytitle", async (req, res) => {
    // res.send("Hello from get book by title GET route");
    try {
      const bookByTitle = await Book.findOne(
        { title: req.body.title }
        );
    
      const successResponse = {
        message: "success",
        bookByTitle: bookByTitle,
      };
  
      res.status(200).json(successResponse);
    } catch (error) {
      console.log(error);
    }
  });

  //in json
//   {
//     "title": "Kitty Cats"
//   }





//DELETE ALL ENTRIES TO THE DATABASE, AS WELL AS DELETEING A SINGLE ENTRY

app.delete("/books/deleteallentries", async (req, res) => {
     res.send("Hello from delete all entries DELETE route");
    try {

        const deleteAll = await Book.deleteMany({});

        const successResponse = {
            message: "successfully deleted all entries",
            deleteAll: deleteAll,
        };

        res.status(201).json(successResponse);
    } catch (error) {
        console.log(error);
    }
})



// //DELETE REQUEST ---------DELETE
// app.delete("/books/deletebook", async (req, res) => {
//     //   res.send("Hello from the delete route");
//       try {
//         const deletedBook = await Book.deleteOne(
//         { title: req.body.title });
    
//         const successResponse = {
//           message: "successfully deleted",
//           deletedBook: deletedBook,
//         };
    
//         res.status(201).json(successResponse); //201 means it's been added successfully compared to 200 which means you have recieved what you wanted to
//       } catch (error) {
//         console.log(error);
//       }
//     });
    



app.listen(5001, () => console.log("Server is listening"));