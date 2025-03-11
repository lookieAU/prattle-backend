const config = require('../../../../config');
const routeConfig = require('../../../../route-config');

const Router = require('express').Router();

Router.get('/', async(req, res) => {
    try{
        res.status(200).json({
            success: true,
            data: config.privacy
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