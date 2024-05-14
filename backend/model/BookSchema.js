const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    authorName: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    pdfUrl: {
        type: String,
        required: true
    }

});