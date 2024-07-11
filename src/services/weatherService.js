const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const BASE_URL = 'http://api.openweathermap.org/data/2.5';
const UNITS = 'metric'; // or 'imperial' for Fahrenheit

const getWeatherData = async (location) => {
    try {
        const url = `${BASE_URL}/weather`;
        const params = {
            q: location,
            appid: WEATHER_API_KEY,
            units: UNITS
        };

        console.log('Request URL:', url);
        console.log('Request Params:', params);

        const response = await axios.get(url, { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data', error.response ? error.response.data : error.message);
        throw error;
    }
};

const getForecastData = async (location) => {
    try {
        const url = `${BASE_URL}/forecast`;
        const params = {
            q: location,
            appid: WEATHER_API_KEY,
            units: UNITS
        };

        console.log('Request URL:', url);
        console.log('Request Params:', params);

        const response = await axios.get(url, { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching forecast data', error.response ? error.response.data : error.message);
        throw error;
    }
};

module.exports = {
    getWeatherData,
    getForecastData
};
