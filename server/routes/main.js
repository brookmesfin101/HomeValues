const express = require('express');

const mainController = require('../controllers/mainController');

const router = express.Router();

router.get('/get-by-year', mainController.GetByYear);

module.exports = router;