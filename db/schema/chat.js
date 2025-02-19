const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    _id: String,
    type: String,
    data: String,
    timestamp: String,
    current_state: String,
    sent_by: String,
    sent_type: String,
    sent_to: String
}, {
    collection: 'chat'
})

module.exports = chatSchema