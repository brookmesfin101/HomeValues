const express = require('express');

const mainController = require('../controllers/mainController');

const router = express.Router();

router.get('/get-by-year', mainController.GetByYear);

router.get('/houses/top/:quantity', mainController.GetTop);

router.get('/houses/bottom/:quantity', mainController.GetBottom);

module.exports = router;