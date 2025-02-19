require('dotenv').config();

const config = {
    dbUrl: process.env.DB,
    port: process.env.PORT,
    secretToken: process.env.SECRET
}

module.exports = config