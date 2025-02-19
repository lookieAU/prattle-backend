const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
    from: String,
    allow: Boolean,
    message: String
}, {
    collection: 'status'
});

module.exports = statusSchema;

