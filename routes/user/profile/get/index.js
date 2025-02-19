const routeConfig = require('../../../../route-config');
const { validateToken } = require('../../../../utils/token');

const Router = require('express').Router();

Router.get(routeConfig.user.nestedRoutes.profile.nestedRoutes.get, validateToken, async(req, res) => {
    try{
        const {id} = req.user;
        const dbRes = await user.findOne({
            _id: id
        });
        res.status(200).json({
            success: true,
            data: dbRes
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