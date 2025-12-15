// this code runs with mongoose v7+
var express = require("express");
const { default: mongoose } = require("mongoose");
let Books = require('./BookSchema.js');
const connectDB = require('./mongodbConnect.js').default;
const cors = require('cors');

console.log("Server2k25");

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

console.log("BOOKS", Books);

// Default route
app.get('/', function (req, res) {
  console.log("this is default");
  res.send("This is default");
});

// About route — FIXED STRING ERROR
app.get('/about', function (req, res) {
  res.send("mongodb express React and mongoose app, React runs in another application");

  Books.countDocuments().exec()
    .then(count => {
      console.log("Total documents Count before addition :", count);
    })
    .catch(err => {
      console.error(err);
    });
});

// Old style get all books
app.get('/allbooksold', function (req, res) {
  Books.find(function (err, allbook) {
    if (err) {
      console.log(err);
    } else {
      res.json(allbook);
    }
  });
});

// Modern get all books
app.get('/allbooks', async (req, res) => {
  const d = await Books.find();
  return res.json(d);
});

// Old style get book by ID
app.get('/getbookold/:id', function (req, res) {
  let id = req.params.id;
  Books.findById(id, function (err, book) {
    console.log("found book " + book);
    res.json(book);
  });
});

// Modern get book by ID — FIXED missing let
app.get('/getbook/:id', async (req, res) => {
  let id = req.params.id;
  let book = await Books.findById(id);

  if (book) {
    console.log("found book " + book);
    res.json(book);
  } else {
    console.log("No book found or Error");
    res.status(404).json({ error: "Book not found" });
  }
});

// Add a new book
app.post('/addbooks', function (req, res) {
  console.log("Ref", req.body);
  let newbook = new Books(req.body);
  console.log("newbook ->", newbook);

  newbook.save()
    .then(todo => {
      res.status(200).json({ 'books': 'book added successfully' });
    })
    .catch(err => {
      res.status(400).send('adding new book failed');
    });
});

// Update a book by ID
app.post('/updatebook/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const update = {
      booktitle: req.body.booktitle,
      PubYear: req.body.PubYear,
      author: req.body.author,
      Topic: req.body.Topic,
      formate: req.body.formate
    };

    console.log("Update request:", { id, update });

    const updatedBook = await Books.findByIdAndUpdate(
      id,
      { $set: update },
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }

    return res.status(200).json({
      message: 'Book updated successfully',
      book: updatedBook
    });

  } catch (err) {
    console.error('Update error:', err);
    return res.status(500).json({
      error: 'Failed to update book',
      details: err.message
    });
  }
});

// Delete a book by ID
app.post('/deleteBook/:id', async (req, res) => {
  try {
    const id = req.params.id;
    console.log("Deleting book:", id);

    const deletedBook = await Books.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }

    res.status(200).send('Book Deleted');

  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({
      error: 'Failed to delete book',
      details: err.message
    });
  }
});

// Start server after DB connection
(async () => {
  await connectDB();
  app.listen(5000, () => console.log('✅ Server running on port 5000'));
})();