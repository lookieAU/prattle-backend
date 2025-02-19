const db = require('../../../../db/db');
const routeConfig = require('../../../../route-config');
const { validateToken } = require('../../../../utils/token');

const Router = require('express').Router();

const user = db.userModel;

Router.get(routeConfig.user.nestedRoutes.addons.nestedRoutes.optout, validateToken, async(req, res) => {
    try{
        const {id} = req.user;
        await user.updateOne({
            _id: id
        }, {
            $set: {
                survey_opt: false
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
})

module.exports = Router;