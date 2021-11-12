const express = require("express");
const cors = require("cors");
require("dotenv").config();
const weatherRoute = require("./routes/weather");
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

app.use("/", weatherRoute);

app.get("/", (req, res) => {
  res.send(
    "<h2>Frontend live site avaliable at https://quickweather.netlify.app/</h2>"
  );
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is live....`);
});
