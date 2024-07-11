const { getWeatherData, getForecastData } = require ('../services/weatherService');

const getCurrentWeather = async (req, res) => {
    const location = req.params.location;

    try {
        const weatherData= await getWeatherData(location);
        res.json(weatherData);
    } catch (error) {
        res.status(500).send('Failed to fetch weather data');
    }
}

const getCurrentForecast = async (req, res) => {
    const location = req.params.location;

    try {
        const forecastData= await getForecastData(location);
        res.json(forecastData);
    } catch(error) {
        res.status(500).send('Failed to fetch the forecast data');
    }
}

module.exports= {
    getCurrentWeather,
    getCurrentForecast
}
