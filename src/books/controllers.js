const Book = require("./model");


//GET
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        // console.log("books: ", typeof books, books);
    
        res.status(200).json({message: "success!!!!!!!", books: books});
      } catch (error) {
        console.log(error);
      }
};

//POST ------CREATE
const addBook = async (req, res) => {
    // res.send("Hello from the book addbooks route");
    try {
      const newBook = await Book.create({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
      });
  
      res.status(201).json({ message: "success", newBook: newBook, }); //201 means it's been added successfully compared to 200 which means you have recieved what you wanted to
    } catch (error) {
      console.log(error);
    }
  };
  

//PUT REQUEST ---------UPDATE
const updateBookAuthor = async (req, res) => {
    // res.send("Hello from the book update route");
    try {
   
        const updatedBook = await Book.updateOne (
            { title: req.body.title },
            { author: req.body.newAuthor }
        );

      res.status(201).json({ message: "success", updatedBook: updatedBook, }); //201 means it's been added successfully compared to 200 which means you have recieved what you wanted to
    } catch (error) {
      console.log(error);
    }
    };

// in json
//{
//     "title": "Zoo Quest",
//     "newAuthor": "Sir David Attenborough",
//     "genre": "Nature"
// }


//DELETE
const deleteBook = async (req, res) => {
        //   res.send("Hello from the delete route");
          try {
            const deletedBook = await Book.deleteOne(
            { title: req.body.title });
        
            res.status(201).json({ message: "successfully deleted", deletedBook: deletedBook }); //201 means it's been added successfully compared to 200 which means you have recieved what you wanted to
          } catch (error) {
            console.log(error);
          }
};   


//PUT
const searchUpdate = async (req, res) => {
    //   res.send("Hello from search and update using put route");
    
        try {
    
            const searchAndUpdate = await Book.updateOne(
                { title: req.body.title },
                { [req.body.key] : req.body.value }
                );

          res.status(201).json({ message: "successfully searched and updated", searchAndUpdate: searchAndUpdate }); //201 means it's been added successfully compared to 200 which means you have recieved what you wanted to
        } catch (error) {
          console.log(error);
        }
      };

//in json 
//   {
//     "title": "Gotta Get Theroux This: My Life and Strange Times in Television",
//     "key": "genre",
//     "value": "Aito-biograpgy/Biography"
// }


//GET
const getBookByTitle = async (req, res) => {
    // res.send("Hello from get book by title GET route");
    try {
      const bookByTitle = await Book.findOne(
        { title: req.body.title }
        );
  
      res.status(200).json({ message: "success", bookByTitle: bookByTitle });
    } catch (error) {
      console.log(error);
    }
  };


//DELETE
const deleteAllEntries = async (req, res) => {
    res.send("Hello from delete all entries DELETE route");
   try {

       const deleteAll = await Book.deleteMany({});

       res.status(201).json({ message: "successfully deleted all entries", deleteAll: deleteAll });
   } catch (error) {
       console.log(error);
   }
}; 


//FIND AND DELETE ONE BOOK BY TITLE USING REQ.PARAMS
const deleteOneBook = async (req, res) => {
    try {
        const title = req.params.title;
        const delOneBook = await Book.deleteOne({ title: req.params.title });
        res.status(200).json({ message: "successfully deleted one book using req.params", delOneBook: delOneBook });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllBooks, addBook, updateBookAuthor, deleteBook, searchUpdate, getBookByTitle, deleteAllEntries, deleteOneBook,
};





