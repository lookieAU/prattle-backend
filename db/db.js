const mongoose = require('mongoose');
const config = require('../config');
const userSchema = require('./schema/user');
const pratSchema = require('./schema/prat');
const factionSchema = require('./schema/faction');
const chatSchema = require('./schema/chat');
const emailSchema = require('./schema/email');
const statusSchema = require('./schema/status');

const userModel = mongoose.model('user', userSchema);
const pratModel = mongoose.model('prat', pratSchema);
const factionModel = mongoose.model('faction', factionSchema);
const chatModel = mongoose.model('chat', chatSchema);
const emailModel = mongoose.model('email', emailSchema);
const statusModel = mongoose.model('status', statusSchema)

const connect = async () => {
    try{
        await mongoose.connect(config.dbUrl);
        console.log('DB Connected');
    }
    catch(e){
        console.log('Error while connecting to DB');
        console.log(e);
    }
}

module.exports = {
    connect: connect,
    userModel: userModel,
    pratModel: pratModel,
    factionModel: factionModel,
    chatModel: chatModel,
    emailModel: emailModel,
    statusModel: statusModel
}