const Book = require('../models/book.model')

module.exports = {

    getAllBooks: (req, res) => {
        Book.find()
            .then((allBooks) => {
                console.log(allBooks);
                res.json(allBooks);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    createBook: (req, res) => {
        Book.create(req.body)
            .then((newBook) => {
                console.log(newBook);
                res.json(newBook);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    },

    getOneBook: (req, res) => {
        Book.findById(req.params.id)
            .then((oneBook) => {
                console.log(oneBook);
                res.json(oneBook);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    },

    // updateBook: (req, res) => {
    //     Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    //         .then((updateBook) => {
    //             console.log(updateBook);
    //             res.json(updateBook);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             res.status(400).json(err);
    //         })
    // },

    // another way to pickup id, use findOneAndUpdate
    updateBook: (req, res) => {
        const id = req.params.id;

        Book.findOneAndUpdate(
            { _id: id },
            req.body,
            {
                new: true,
                runValidators: true
            })
            .then(updateBook => {
                console.log(res);
                res.json(updateBook);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    },

    // deleteBook: (req, res) => {
    //     Book.findByIdAndDelete(req.params.id)
    //         .then((deletedBook) => {
    //             console.log(deletedBook);
    //             res.json(deletedBook);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             res.status(400).json(err)
    //         })
    // }

    deleteBook: (req, res) => {
        const id = req.params.id
        Book.deleteOne({ _id: id })
            .then((deletedBook) => {
                console.log(deletedBook);
                res.json(deletedBook);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    }
}