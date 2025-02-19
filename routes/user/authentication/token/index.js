const routeConfig = require('../../../../route-config');
const { validateToken } = require('../../../../utils/token');

const Router = require('express').Router();

Router.get(routeConfig.user.nestedRoutes.authentication.nestedRoutes.token, validateToken, async(req, res) => {
    res.status(200).json({
        success: true,
        data: req.user
    });
});

module.exports = Router;