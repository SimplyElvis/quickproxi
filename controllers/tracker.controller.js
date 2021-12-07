require("dotenv").config();
const needle = require("needle");
const url = require("url");

const tracker = async (req, res) => {
  try {
    const params = new URLSearchParams({
      [process.env.GEOLOC_API]: process.env.GEOLOC_KEY,
      ...url.parse(req.url, true).query,
    });

    const trackerResp = await needle(
      "get",
      `${process.env.GE0LOC_BASE_URL}?${params}`
    );

    const trackerData = trackerResp.body;

    res.status(200).json(trackerData);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { tracker };
