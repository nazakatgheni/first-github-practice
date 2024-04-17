const mongoose = require('mongoose');


const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        // validation
        required: [true, "Title is required"],
        minLength: [3, "Title must be at least 3 characters long"]
    },
    author: {
        type: String,
        required: [true, "Author is required"],
        minLength: [3, "Author must be at least 3 characters long"]
    },
    publishYear: {
        type: Number,
        required: [true, "Publish Year is required"],
        min: [1800, "Publish Year must be at least 1800"]
    },
    pages: {
        type: Number,
        required: [true, "Page number is required"],
        min: [10, "Page must be at least 10 pages"]
    },
    genre: {
        type: String,
        required: [true, "Genre is required"]
    }
},
    { timestamps: true });

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;