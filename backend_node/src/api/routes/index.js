const express = require('express');
const { appBlockRouter } = require('../../modules/app-block/routes/app-block.routes');
const { safeBlockRouter } = require('../../modules/safe-block/routes/safe-block.routes');
const { macroAutomationRouter } = require('../../modules/macro-automation/routes/macro-automation.routes');

const apiRouter = express.Router();

apiRouter.use('/app-block', appBlockRouter);
apiRouter.use('/safe-block', safeBlockRouter);
apiRouter.use('/macro-automation', macroAutomationRouter);

module.exports = { apiRouter };
