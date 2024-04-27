const config = require("./config");
const weatherApiUrl = config.WEATHER_API_URL;

module.exports.getWeather = async ({ city }) => {
  // in reality this is an API call to a weather service

  console.log(`making an API call to ${weatherApiUrl} for ${city}`);

  const weatherDatabase = {
    Seattle: "Rainy",
    Singapore: "Sunny",
  };

  const weather = weatherDatabase[city] || "Unknown";

  return weather;
};
