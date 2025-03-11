const db = require('../../../../db/db');
const routeConfig = require('../../../../route-config');

const Router = require('express').Router();

const emailDb = db.emailModel;

Router.post('/', async(req, res) => {
    try{
        const {email, code} = req.body;
        const emailRes = await emailDb.findOne({
            email: email,
            code: code
        });
        if(emailRes){
            res.status(200).json({
                success: true,
                data: email
            });
        }
        else{
            throw new Error({
                type: 'predefined',
                error: 'Wrong Verification Code, please try again'
            });
        }
    }
    catch(e){
        res.status(400).json({
            success: false,
            data: e
        });
    }
})

module.exports = Router;