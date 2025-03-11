const db = require('../../../../db/db');
const routeConfig = require('../../../../route-config');
const { generateToken } = require('../../../../utils/token');

const Router = require('express').Router();
const user = db.userModel;

Router.post('/', async(req, res) => {
    try{
        const {id, pwd} = req.body;
        const dbEmailRes = await user.findOne({
            email: id,
            pwd: pwd
        });
        const dbIdRes = await user.findOne({
            _id: id,
            pwd: pwd
        });
        if(dbEmailRes){
            const token = generateToken({
                id: dbEmailRes._id
            });
            res.status(200).json({
                success: true,
                data: token
            });
        }
        else if(dbIdRes){
            const token = generateToken({
                id: id
            });
            res.status(200).json({
                success: true,
                data: token
            });
        }
        else{
            throw new Error({
                type: 'predefined',
                error: 'Wrong ID (or) Password (or) Not Signed Up'
            });
        }
    }
    catch(e){
        res.status(400).json({
            success: false,
            data: e
        });
    }
});

module.exports = Router;