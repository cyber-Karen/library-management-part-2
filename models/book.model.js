import mongoose, { Mongoose } from "mongoose";


const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    author: {
        type: [String],
        required: true,
        validate: function (value) {
            return Array.isArray(value) || typeof value === 'string';
        },
        message: 'Author must be a String or an array of string',
    },
    genre: {
        type: String,
        required: true,
        validate: function(value) {
            return Array.isArray(value) || typeof value === 'string';
        },
        message: 'Genre must be a String or an array of string',
    },
    publicationDate: {
        type: Date,
        required: true,
        validate: function(value) {
            return value <= new Date();
        }
    },
    copiesAvailable: {
        type: Number,
        default: true
    },
    totalCopies: {
        type: Number,
        default: true
    },
    borrowedBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})


const Book = mongoose.model('Book', bookSchema)
export {Book};
