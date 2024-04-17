const Stores = require('../models/stores.model')

module.exports = {

    getAllStores: (req, res) => {
        Stores.find()
            .then((allStores) => {
                console.log(allStores);
                res.json(allStores);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    createStores: (req, res) => {
        Stores.create(req.body)
            .then((newStores) => {
                console.log(newStores);
                res.json(newStores);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    },

    getOneStores: (req, res) => {
        Stores.findById(req.params.id)
            .then((oneStore) => {
                console.log(oneStore);
                res.json(oneStore);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    },


    updateStore: (req, res) => {
        const id = req.params.id;
        Stores.findOneAndUpdate(
            { _id: id },
            req.body,
            {
                new: true,
                runValidators: true
            })
            .then(updateStore => {
                console.log(res);
                res.json(updateStore);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    },

    deleteStore: (req, res) => {
        const id = req.params.id
        Stores.deleteOne({ _id: id })
            .then((deleteStore) => {
                console.log(deleteStore);
                res.json(deleteStore);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    }
}
