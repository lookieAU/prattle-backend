const db = require('../../../../db/db');
const routeConfig = require('../../../../route-config');

const Router = require('express').Router();
const user = db.userModel;

Router.post('/', async(req, res) => {
    try{
        const {email, pwd} = req.body;
        await user.updateOne({
            email: email
        }, {
            $set: {
                pwd: pwd
            }
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
});

module.exports = Router;