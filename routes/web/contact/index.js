const routeConfig = require('../../../route-config');

const Router = require('express').Router();

Router.get('/', async(req, res) => {
    try{
        res.status(200).json({
            success: true,
            data: {
                name: 'Canonica Customer Care',
                availability: 'Mon - Fri (9AM - 6PM IST)',
                contact: {
                    email: 'canonica.cs@gmail.com',
                    phone: '+91-8787589776'
                }
            }
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