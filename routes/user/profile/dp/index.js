const multer = require('multer');
const routeConfig = require('../../../../route-config');
const OCI = require('../../../../utils/oci');
const { validateToken } = require('../../../../utils/token');
const db = require('../../../../db/db');

const Router = require('express').Router();
const upload = multer({ memory: true });
const user = db.userModel;

Router.post('/', validateToken,
    upload.single('file'), async(req, res) => {
    try{
        const oci = new OCI();
        if(!req.file){
            throw new Error({
                type: 'predefined',
                error: 'No file uploaded'
            });
        }
        const {fileName} = req.body;
        const {id} = req.user;
        const response = await oci.uploadToOracleCloud(id, fileName, req.file.buffer);
        if(response.success){
            await user.updateOne({
                _id: id
            }, {
                $set: {
                    dp: response.filePath
                }
            });
            res.status(200).json({
                success: true,
                data: 'File uploaded successfully'
            });
        }
        else{
            throw new Error({
                type: 'predefined',
                error: 'Error in uploading file, please try again after sometime.'
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