const url = require("url");
const weather = require("express").Router();
const needle = require("needle");
require("dotenv").config();

weather.get("/", async (req, res) => {
  console.log("weather");
  try {
    const params = new URLSearchParams({
      [process.env.OWEATHER_APP_ID]: process.env.OWEATHER_APP_ID,
      ...url.parse(req.url, true).query,
    });

    const OweatherResp = await needle(
      "get",
      `${process.env.OWEATHER_BASE_URL}?${params}`
    );
    const OweatherData = OweatherResp.body;

    res.status(200).json(OweatherData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = weather;
