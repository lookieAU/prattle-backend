const db = require('../../../../db/db');
const routeConfig = require('../../../../route-config');
const { validateToken } = require('../../../../utils/token');

const Router = require('express').Router();
const user = db.userModel;

Router.post(routeConfig.user.nestedRoutes.profile.nestedRoutes.update, validateToken, async(req, res) => {
    try{
        const {newId, email} = req.body;
        await user.updateOne({
            email: email
        }, {
            $set: {
                _id: newId
            }
        });
        res.status(200).json({
            success: true
        });
        //Logout after updating ID
    }
    catch(e){
        res.status(400).json({
            success: false,
            data: e
        });
    }
})

module.exports = Router;