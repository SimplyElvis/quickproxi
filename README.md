# _Weather proxy_ backend proxy server

Backend API proxy server with hidden API key, rate limiting and caching for [quick weather](https://quickweather.netlify.app/) ReactJs web app.

### _Installation_

- clone the repository
- install dependencies using `npm install` or `yarn install`
- start the server using `npm start` or `yarn start`

### _Usage_

### _Configuration_

Create a `.env` file with the following variables:

    - `OWEATHER_BASE_URL`:open weather base url(api.openweathermap.org/data/2.5/weather?)
    - `OWEATHER_API_KEY`: {your open weather API key}
    - `OWEATHER_APP_ID`:  your open weather appId (appid=)

### _Installed Modules_

- express
- neddle
- cors
- dotenv
