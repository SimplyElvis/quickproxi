const trackroute = require("express").Router();
const { tracker } = require("../controllers/tracker.controller");
let apiCache = require("apicache").middleware;

trackroute.get("/", apiCache(1), tracker);

module.exports = { trackroute };

// https://geo.ipify.org/api/v2/country,city?apiKey=at_uPM7JdTHnC3NzRApNpRfOGRbGWl49&ipAddress=8.8.8.8
