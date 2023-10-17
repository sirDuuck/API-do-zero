const express = require('express');

const router = require ('./router');

const app = express();

module.exports = app;

app.use(router);