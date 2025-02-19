const db = require('../../../../db/db');
const routeConfig = require('../../../../route-config');
const { validateToken } = require('../../../../utils/token');

const Router = require('express').Router();

const user = db.userModel;

Router.post(routeConfig.user.nestedRoutes.addons.nestedRoutes.survey, validateToken, async(req, res) => {
    try{
        const {gender, dob, country} = req.body;
        const {id} = req.user;
        await user.updateOne({
            _id: id
        }, {
            $set: {
                survey: {
                    gender: gender,
                    dob: dob,
                    country: country
                }
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