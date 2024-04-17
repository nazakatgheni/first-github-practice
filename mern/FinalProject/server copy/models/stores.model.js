const mongoose = require('mongoose');


const StoresSchema = new mongoose.Schema({
    storeName: {
        type: String,
        // validation
        required: [true, "Store Name is required"],
        minLength: [3, "Name must contain 3 characters!"]
    },
    storeNumber: {
        type: Number,
        required: [true, "Store Number is required"],
        minLength: [0, "Must be a unique number greater than 0"]
    }
},
    { timestamps: true });

const Stores = mongoose.model("Stores", StoresSchema);
module.exports = Stores;