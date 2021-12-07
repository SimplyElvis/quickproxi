const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { weatherData } = require("./routes/weather");
const { trackroute } = require("./routes/tracker");
const rateLimit = require("express-rate-limit");

const app = express();
const limiter = rateLimit({
  /* disable user's ability to make requests if max == 0, waits for 15 mins before next requests can be made. */
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, //max requests.
  /* returns 429 Too Many Requests when max is exceeded. */
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(limiter);

app.set("trust-proxy", 1);

app.use("/", weatherData);
// app.use("/api/track", trackroute);

app.get("/", (req, res) => {
  res.send(
    `<h2>API proxy server</h2><p>Backend API proxy server with hidden API key, rate limiting and caching for <a href='https://quickweather.netlify.app/'>quick weather</a> and <a href='https://trackmyip.netlify.app/' ReactJs web apps.</p>`
  );
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is live....`);
});
