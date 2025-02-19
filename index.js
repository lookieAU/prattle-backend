const express = require('express');
const cors = require('cors');
const config = require('./config');
const db = require('./db/db');
const routeConfig = require('./route-config');

const app = express();

const userStatus = require('./routes/user/status/index');
const userAuthenticationToken = require('./routes/user/authentication/token/index');
const userAuthenticationLogin = require('./routes/user/authentication/login/index');
const userAuthenticationVerify = require('./routes/user/authentication/verify/index');
const userAuthenticationSignUp = require('./routes/user/authentication/signup/index');
const userAuthenticationCode = require('./routes/user/authentication/code/index');
const userAuthenticationCheck = require('./routes/user/authentication/check/index');
const userAuthenticationReset = require('./routes/user/authentication/reset/index');
const userAddonsSurvey = require('./routes/user/addons/survey/index');
const userAddonsOptOut = require('./routes/user/addons/optout/index');
const userProfileGet = require('./routes/user/profile/get/index');
const userProfileUpdate = require('./routes/user/profile/update/index');
const userProfileDelete = require('./routes/user/profile/delete/index');
const userProfileDp = require('./routes/user/profile/dp/index');
const userMediaGet = require('./routes/user/media/get/index');

app.use(cors());
app.use(express.json());
app.use(routeConfig.baseUrl + routeConfig.user.indexRoute, userStatus);
app.use(routeConfig.baseUrl + routeConfig.user.indexRoute + routeConfig.user.nestedRoutes.authentication.indexRoute, userAuthenticationToken);
app.use(routeConfig.baseUrl + routeConfig.user.indexRoute + routeConfig.user.nestedRoutes.authentication.indexRoute, userAuthenticationLogin);
app.use(routeConfig.baseUrl + routeConfig.user.indexRoute + routeConfig.user.nestedRoutes.authentication.indexRoute, userAuthenticationVerify);
app.use(routeConfig.baseUrl + routeConfig.user.indexRoute + routeConfig.user.nestedRoutes.authentication.indexRoute, userAuthenticationSignUp);
app.use(routeConfig.baseUrl + routeConfig.user.indexRoute + routeConfig.user.nestedRoutes.authentication.indexRoute, userAuthenticationCode);
app.use(routeConfig.baseUrl + routeConfig.user.indexRoute + routeConfig.user.nestedRoutes.authentication.indexRoute, userAuthenticationCheck);
app.use(routeConfig.baseUrl + routeConfig.user.indexRoute + routeConfig.user.nestedRoutes.authentication.indexRoute, userAuthenticationReset);
app.use(routeConfig.baseUrl + routeConfig.user.indexRoute + routeConfig.user.nestedRoutes.addons.indexRoute, userAddonsSurvey);
app.use(routeConfig.baseUrl + routeConfig.user.indexRoute + routeConfig.user.nestedRoutes.addons.indexRoute, userAddonsOptOut);
app.use(routeConfig.baseUrl + routeConfig.user.indexRoute + routeConfig.user.nestedRoutes.profile.indexRoute, userProfileGet);
app.use(routeConfig.baseUrl + routeConfig.user.indexRoute + routeConfig.user.nestedRoutes.profile.indexRoute, userProfileUpdate);
app.use(routeConfig.baseUrl + routeConfig.user.indexRoute + routeConfig.user.nestedRoutes.profile.indexRoute, userProfileDelete);
app.use(routeConfig.baseUrl + routeConfig.user.indexRoute + routeConfig.user.nestedRoutes.profile.indexRoute, userProfileDp);
app.use(routeConfig.baseUrl + routeConfig.user.indexRoute + routeConfig.user.nestedRoutes.media.indexRoute, userMediaGet);

app.get(routeConfig.baseUrl, async(req, res) => {
    res.status(200).json({
        success: true,
        data: 'Prattle Server Base Route'
    })
})

app.get('/', async(req, res) => {
    res.status(200).json({
        success: true,
        data: 'Prattle Server - Welcome'
    })
})

app.listen(config.port, () => {
    db.connect();
    console.log(`Server is running on port ${config.port}`);
});
