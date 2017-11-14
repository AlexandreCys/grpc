const express = require('express');
const exampleController = require('./example');

const router = express.Router();

router.use('/example', exampleController);

module.exports = router;
