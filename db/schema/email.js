const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
    email: String,
    code: String
}, {
    collection: 'email'
});

module.exports = emailSchema;