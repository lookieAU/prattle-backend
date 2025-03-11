const express = require('express');
const cors = require('cors');
const config = require('./config');
const db = require('./db/db');
const routeConfig = require('./route-config');

const app = express();

app.use(cors());
app.use(express.json());

function registerRoutes(parentPath, routeObj) {
  if (typeof routeObj === 'string') {
    try {
      const modulePath = `./routes${parentPath}${routeObj}/index`;
      const routeModule = require(modulePath);
      
      app.use(routeConfig.baseUrl + parentPath + routeObj, routeModule);
      console.log(`Registered route: ${routeConfig.baseUrl}${parentPath}${routeObj}`);
    } catch (error) {
      console.warn(`Failed to load route module for ${parentPath}${routeObj}`);
    }
    return;
  }
  
  const currentPath = parentPath + (routeObj.indexRoute || '');
  
  if (routeObj.indexRoute) {
    try {
      const modulePath = `./routes${currentPath}/index`;
      const routeModule = require(modulePath);
      
      app.use(routeConfig.baseUrl + currentPath, routeModule);
      console.log(`Registered route: ${routeConfig.baseUrl}${currentPath}`);
    } catch (error) {
      console.warn(`Failed to load route module for ${currentPath}`);
    }
  }
  
  if (routeObj.nestedRoutes) {
    Object.entries(routeObj.nestedRoutes).forEach(([key, value]) => {
      registerRoutes(currentPath, value);
    });
  }
}

console.log("Registering routes ---");
Object.entries(routeConfig).forEach(([key, value]) => {
  if (key !== 'baseUrl' && typeof value === 'object') {
    registerRoutes('', value);
  }
});

app.get(routeConfig.baseUrl, async(req, res) => {
    res.status(200).json({
        success: true,
        data: 'Prattle Server Base Route'
    });
});

app.get('/', async(req, res) => {
    res.status(200).json({
        success: true,
        data: 'Prattle Server - Welcome'
    });
});

app.listen(config.port, () => {
    db.connect();
    console.log(`Server is running on port ${config.port}`);
});