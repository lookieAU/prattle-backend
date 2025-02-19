const db = require('../../../../db/db');
const routeConfig = require('../../../../route-config');
const sendVerificationEmail = require('../../../../utils/mailer');

const Router = require('express').Router();
const user = db.userModel;
const emailDb = db.emailModel;

Router.post(routeConfig.user.nestedRoutes.authentication.nestedRoutes.code, async(req, res) => {
    try{
        const {email} = req.body;
        const dbCheck = await user.findOne({
            email: email
        })
        if(dbCheck){
            throw new Error({
                type: 'predefined',
                error: 'User with Email already exists, please login.'
            });
        }
        const mailRes = await sendVerificationEmail(email);
        if(mailRes.success){
            const emailRes = await emailDb.findOne({
                email: email
            });
            if(emailRes){
                await emailDb.updateOne({
                    email: email
                }, {
                    $set: {
                        code: mailRes.data
                    }
                });
            }
            else{
                await emailDb.create({
                    email: email,
                    code: mailRes.code
                });
            }
        }
        else{
            throw new Error({
                type: 'predefined',
                error: 'Server error, please try after sometime or with a different mail.'
            })
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