const express = require('express');
const { getAppBlockConfig } = require('../controllers/app-block.controller');

const appBlockRouter = express.Router();

appBlockRouter.get('/config', getAppBlockConfig);

module.exports = { appBlockRouter };
