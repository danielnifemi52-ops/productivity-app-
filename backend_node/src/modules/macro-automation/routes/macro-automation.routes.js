const express = require('express');
const { getMacroAutomationConfig } = require('../controllers/macro-automation.controller');

const macroAutomationRouter = express.Router();

macroAutomationRouter.get('/config', getMacroAutomationConfig);

module.exports = { macroAutomationRouter };
