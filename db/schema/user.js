const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: String,
    email: String,
    timestamp_creation: Date,
    pwd: String,
    dp: String,
    survey: {
        name: String,
        dob: String,
        gender: String,
        country: String
    },
    prat_ids: Array,
    chat_requests: Array,
    chat_dms: Array,
    current_feed: Array,
    is_admin: Boolean
}, {
    collection: 'user'
})

module.exports = userSchema