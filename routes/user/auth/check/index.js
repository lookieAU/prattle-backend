const db = require('../../../../db/db');
const routeConfig = require('../../../../route-config');

const Router = require('express').Router();
const user = db.userModel;

Router.get('/', async(req, res) => {
    try{
        const {id} = req.query;
        const dbRes = await user.findOne({
            _id: id
        });
        if(dbRes){
            throw new Error({
                type: 'predefined',
                error: 'User with ID already exists'
            });
        }
        res.status(200).json({
            success: true,
            data: 'ID Available'
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