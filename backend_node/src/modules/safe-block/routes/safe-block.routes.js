const express = require('express');
const { getSafeBlockConfig } = require('../controllers/safe-block.controller');

const safeBlockRouter = express.Router();

safeBlockRouter.get('/config', getSafeBlockConfig);

module.exports = { safeBlockRouter };
