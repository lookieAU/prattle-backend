const express = require('express');
const cors = require('cors');
const config = require('./config');
const db = require('./db/db');
const routeConfig = require('./route-config');

const app = express();

app.use(cors());
app.use(express.json());

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
