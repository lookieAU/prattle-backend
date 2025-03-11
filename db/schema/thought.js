const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    _id: String,
    author: String,
    likes: Array,
    sub_thoughts: Array,
    parent_thought: Boolean,
    timestamp: Date,
    hashtags: Array,
    prat_id: String
}, {
    collection: 'thought'
});

module.exports = thoughtSchema