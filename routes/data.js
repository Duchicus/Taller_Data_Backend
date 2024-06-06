const express = require('express');
const DataController = require('../controllers/DataController');
const router = express.Router();

router.get('/test', DataController.test);

module.exports = router;
