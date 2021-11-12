const express = require("express");
const cors = require("cors");
require("dotenv").config();
const weather = require("./routes/weather");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("api/weather", weather);

app.get("/", (req, res) => {
  res.send(".....");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is live....`);
});
