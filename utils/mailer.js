const nodemailer = require('nodemailer');
const config = require('../config');

const transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
        user: config.nodemailerMail,
        pass: config.nodemailerPwd
   } 
});

async function sendVerificationEmail(recipientEmail){
    const verificationCode = Math.floor(10000 + Math.random * 90000);
    try {
        await transporter.sendMail({
            from: config.nodemailerMail,
            to: recipientEmail,
            subject: 'Verify your Email for registering on Prattle',
            text: `Your verification code is ${verificationCode}`,
            html: `<h3>Your verification code is ${verificationCode}</h3>`
        });

        return {
            success: true,
            data: verificationCode
        }
    }
    catch(e){
        return {
            success: false,
            data: e
        }
    }
}

module.exports = sendVerificationEmail;