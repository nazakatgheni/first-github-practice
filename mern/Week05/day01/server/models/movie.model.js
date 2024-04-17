const mongoose = require('mongoose')

//             we have to use new key word to create new schema
const MovieSchema = new mongoose.Schema(
    {
        title: { type: String },
        year: { type: Number },
        rating: { type: Number },
        oscarNomination: { type: Boolean }
    },
    {
        timestamps: true // Mongoose schemas support a timestamps option. If you set timestamps: true, Mongoose will add two properties of type Date to your schema:

        // createdAt: a date representing when this document was created
        // updatedAt: a date representing when this document was last updated

    }
);

//            name of the collection
const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie; // we exported the movie so server side can use it

