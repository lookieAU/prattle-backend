const routeConfig = require('../../../../route-config');
const OCI = require('../../../../utils/oci');
const { validateToken } = require('../../../../utils/token');

const Router = require('express').Router();

Router.get(routeConfig.user.nestedRoutes.media.nestedRoutes.get, validateToken, async (req, res) => {
    try{
        const {filePath} = req.query;
        const oci = new OCI();
        const response = await oci.getFileUrl(filePath);
        if(response.success){
            res.status(200).json({
                success: true,
                data: response.uri
            });
        }
        else{
            throw new Error({
                type: 'predefined',
                error: 'Server error, please try after sometime.'
            })
        }
    }
    catch(e){
        console.log(e);
        res.status(400).json({
            success: false,
            data: e
        });
    }
})

module.exports = Router;