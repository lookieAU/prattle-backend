const db = require('../../../../db/db');
const routeConfig = require('../../../../route-config');
const { validateToken } = require('../../../../utils/token');

const Router = require('express').Router();
const user = db.userModel;
const chat = db.chatModel;
const prat = db.pratModel;

Router.delete('/', validateToken, async(req, res) => {
    try{
        const {id} = req.user;
        await user.deleteOne({
            _id: id
        });
        await chat.deleteMany({
            sent_by: id
        });
        await prat.deleteMany({
            uploaded_by: id
        });
        res.status(200).json({
            success: true
        });
    }
    catch(e){
        res.status(400).json({
            success: false,
            data: e
        });
    }
})

module.exports = Router;