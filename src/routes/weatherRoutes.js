const express = require('express');
const { getCurrentWeather, getCurrentForecast }= require('../controllers/weatherController');
const verifyToken = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/current/:location', verifyToken, getCurrentWeather);
router.get('/forecast/:location', verifyToken, getCurrentForecast);

module.exports= router;