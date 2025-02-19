const db = require('../../../db/db');
const routeConfig = require('../../../route-config');

const Router = require('express').Router();

const status = db.statusModel;

Router.get(routeConfig.user.nestedRoutes.status, async(req, res) => {
    try{
        const dbRes = await status.findOne({
            from: 'admin'
        });
        if(dbRes.allow){
            res.status(200).json({
                success: true,
                data: dbRes
            });
        }
        else{
            throw new Error({
                type: 'predefined',
                data: dbRes.message
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