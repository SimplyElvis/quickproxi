# **Weather API proxy** backend proxy server

Backend API proxy server with hidden API key, rate limiting and caching for [quick weather](https://quickweather.netlify.app/) ReactJs web app.

### _Installation_

- clone the repository
- install dependencies using `npm install` or `yarn install`
- start the server using `npm start` or `yarn start`

### _Usage_

    Get hostname/api/weather?q={city}
    - https://quickproxi.herokuapp.com/api/weather?q=abuja

when sending request from a frontend web app.

The server only allows max of 20 requests simultaneously and send a "Too Many requests" error when requests exceeds max limit. Requests can be send again Only after 15 minutes.

### _Configuration_

Create a `.env` file with the following variables:

    - `OWEATHER_BASE_URL`:open weather base url(https://api.openweathermap.org/data/2.5/weather)
    - `OWEATHER_API_KEY`: {your open weather API key}
    - `OWEATHER_APP_ID`:  your open weather appId (appid)

### _Installed Modules_

- express
- neddle
- cors
- dotenv
- express-rate-limit
- apicache
