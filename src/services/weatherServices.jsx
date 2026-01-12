const weatherUrl = "https://api.open-meteo.com/v1/forecast";
const geoUrl = "https://geocoding-api.open-meteo.com/v1/search";
const city = "Jalandhar";
export const getWeatherData = async () => {
  try {
    const geoResponse = await fetch(
      `${geoUrl}?name=${city}&count=1&language=en&format=json`
    );
    const geoData = await geoResponse.json();
    if (!geoData.results || geoData.results.length === 0) {
      throw new Error("City not found");
    }
    const { latitude, longitude, name } = geoData.results[0];

    const weatherResponse = await fetch(
      `${weatherUrl}?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weather_code,sunrise,sunset,rain_sum&hourly=temperature_2m,weather_code,uv_index&current=temperature_2m,wind_speed_10m,wind_direction_10m,wind_gusts_10m,apparent_temperature&timezone=auto&forecast_days=14`
    );
    const weatherData = await weatherResponse.json();
    console.log(weatherData);

    const aqiResponse = await fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=us_aqi`)
    const aqiData = await aqiResponse.json();
    return {
      location: name,
      current: weatherData.current,
      hourly: weatherData.hourly,
      daily: weatherData.daily,
      aqi: aqiData,
      uv: { uv_index: weatherData.hourly.uv_index, time: weatherData.hourly.time },
      sunrise: weatherData.daily.sunrise,
      sunset: weatherData.daily.sunset,
      feelLike: { apparent_temperature: weatherData.current.apparent_temperature, actual_temperature: weatherData.current.temperature_2m }
    };
  } catch (error) {
    console.error("fetch error", error);
    throw error;
  }
};

