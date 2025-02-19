const mongoose = require('mongoose');

const factionSchema = new mongoose.Schema({
    _id: String,
    requests: Array,
    name: String,
    banner: String,
    public: Boolean,
    created_timestamp: Date,
    founder_id: String,
    moderators: Array,
    activity_log: Array,
    members: Array,
    orginal_post: String
}, {
    collection: 'faction'
})

module.exports = factionSchema