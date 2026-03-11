const express = require('express');
const cors = require('cors');
const { apiRouter } = require('./api/routes');
const { notFoundHandler } = require('./core/middleware/not-found.middleware');
const { errorHandler } = require('./core/middleware/error.middleware');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', apiRouter);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
