const express = require('express');
const DataController = require('../controllers/DataController');
const router = express.Router();

router.get('/test', DataController.test);
router.get('/getall', DataController.getAll);
router.get('/getbycategory/:category', DataController.getByCategory);

module.exports = router;
