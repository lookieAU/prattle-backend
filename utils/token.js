const jwt = require('jsonwebtoken');
const config = require('../config');

const generateToken = (payload) => {
    const options = {
        expiresIn: '60d'
    };
    const token = jwt.sign(payload, config.secretToken, options);
    return token;
}

const validateToken = (req, res, next) => {
    try{
        const authHeader = req.headers.authorization;
        jwt.verify(authHeader.split(" ")[1], config.secretToken, (err, payload) => {
            if(err){
                res.status(403).json({
                    success: false,
                    data: {
                        type: 'predefined',
                        error: 'Invalid Token/ Session expired. Please Login Again.'
                    }
                });
            }
            else{
                req.user = payload;
                next();
            }
        })
    }
    catch(e){
        res.status(403).json({
            success: false,
            data: {
                type: 'predefined',
                error: 'Invalid Token/ Session expired. Please Login Again.'
            }
        });
    }
}

module.exports = {
    generateToken: generateToken,
    validateToken: validateToken
}