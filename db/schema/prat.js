const mongoose = require('mongoose');

const pratSchema = new mongoose.Schema({
    _id: String,
    media: Array,
    timestamp: Date,
    uploaded_by: String,
    likes: Array,
    thoughts: Array,
    is_faction: Boolean,
    faction_requests: Array,
    share: String,
    ad: Boolean,
    visibility: Number
}, {
    collection: 'prat'
})

module.exports = pratSchema