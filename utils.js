const { default: axios } = require("axios");

const getData = async ({
  stock1,
  stock2,
  stock3,
  newsCategory,
  newsCountry,
  holidayCountry,
  weatherLocation,
}) => {
  try {
    const stockLink = `https://api.coingecko.com/api/v3/simple/price?ids=${stock1},${stock2},${stock3}&vs_currencies=usd&include_24hr_change=true&precision=full`;
    const stockOptions = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-ekWMSm98EKLKMQXynXgLo5At",
      },
    };
    const newsLink = `https://newsapi.org/v2/top-headlines?country=${newsCountry}&category=${newsCategory}&apiKey=d5b9080f63c44d35aec2792dc160e348`;
    const holidayLink = `https://date.nager.at/api/v3/NextPublicHolidays/${holidayCountry}`;
    const weatherLink = `https://api.weatherapi.com/v1/current.json?key=5c2cd8491d4f4186aea02645241403&q=${weatherLocation}`;

    const stockData = await axios(stockLink, stockOptions);
    const newsData = await axios(newsLink);
    const holidayData = await axios(holidayLink);
    const weatherData = await axios(weatherLink);

    return {
      stockData: stockData.data,
      newsData: newsData.data,
      holidayData: holidayData.data,
      weatherData: weatherData.data,
    };
  } catch (error) {
    console.error("Error getting data:", error);
  }
};

module.exports = { getData };
