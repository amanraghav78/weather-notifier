const express = require('express');
const { getCurrentWeather, getCurrentForecast }= require('../controllers/weatherController');
const router = express.Router();

router.get('/current/:location', getCurrentWeather);
router.get('/forecast/:location', getCurrentForecast);

module.exports= router;