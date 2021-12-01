const { qCityWeather } = require("../controllers/weather.controller.js");
const apiCache = require("apicache");
const weatherData = require("express").Router();

let cache = apiCache.middleware;

weatherData.get("/api/weather", cache("1 minutes"), qCityWeather);

module.exports = { weatherData };
// weatherRoute.get("/api/weather", cache("1 minutes"), async (req, res) => {
//   try {
//     const params = new URLSearchParams({
//       [process.env.OWEATHER_APP_ID]: process.env.OWEATHER_API_KEY,
//       ...url.parse(req.url, true).query, //spread all params passed as query arguments.
//     });

//     const OweatherResp = await needle(
//       "get",
//       `${process.env.OWEATHER_BASE_URL}?${params}`
//     );
//     const OweatherData = OweatherResp.body;

//     res.status(200).json(OweatherData);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });
