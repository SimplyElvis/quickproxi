const { qCityWeather } = require("../controllers/weather.controller.js");
const apiCache = require("apicache");
const weatherData = require("express").Router();

let cache = apiCache.middleware;

weatherData.get("/", cache("1 minutes"), qCityWeather);

module.exports = { weatherData };
