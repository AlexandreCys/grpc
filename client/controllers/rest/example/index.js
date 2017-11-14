const express = require('express');
const examplesController = require('./examplesController');

const router = express.Router();

router.use('/', examplesController);

module.exports = router;