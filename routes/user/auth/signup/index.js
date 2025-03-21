const db = require('../../../../db/db');
const routeConfig = require('../../../../route-config');

const Router = require('express').Router();
const user = db.userModel;

Router.post('/', async(req, res) => {
    try{
        const {id, email, pwd} = req.body;
        await user.create({
            _id: id,
            email: email,
            timestamp_creation: new Date(),
            pwd: pwd,
            survey_opt: true,
            dp: 'user/default_dp.jpg',
            tos_consent: true
        });
        res.status(200).json({
            success: true,
            data: id
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