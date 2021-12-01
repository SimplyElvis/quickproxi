require("dotenv").config();
const url = require("url");
const needle = require("needle");

// query for a city.
const qCityWeather = async (req, res) => {
  try {
    const params = new URLSearchParams({
      [process.env.OWEATHER_APP_ID]: process.env.OWEATHER_API_KEY,
      ...url.parse(req.url, true).query, //spread all params passed as query arguments.
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
};

module.exports = { qCityWeather };

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

// module.exports = weatherRoute;
