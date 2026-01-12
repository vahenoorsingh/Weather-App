const weatherUrl = "https://api.open-meteo.com/v1/forecast";
const geoUrl = "https://geocoding-api.open-meteo.com/v1/search";
const city = "Jalandhar";
const hourlyUrl = "hourly=temperature_2m,weather_code,uv_index,dew_point_2m";
const dailyUrl = "daily=temperature_2m_max,temperature_2m_min,weather_code,sunrise,sunset,rain_sum";
const currentUrl = "current=temperature_2m,wind_speed_10m,wind_direction_10m,wind_gusts_10m,apparent_temperature,visibility,relative_humidity_2m"

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
      `${weatherUrl}?latitude=${latitude}&longitude=${longitude}&${dailyUrl}&${hourlyUrl}&${currentUrl}&timezone=auto&forecast_days=14`
    );
    const weatherData = await weatherResponse.json();
    console.log(weatherData);

    const aqiResponse = await fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=us_aqi`)
    const aqiData = await aqiResponse.json();

    const currentHour = new Date().getHours()
    const startIndex = weatherData.hourly.time.findIndex(t => t.includes(`T${currentHour.toString().padStart(2, '0')}:00`))
    const finalStartIndex = startIndex === -1 ? 0 : startIndex


    return {
      location: name,
      current: weatherData.current,
      hourly: weatherData.hourly,
      daily: weatherData.daily,
      aqi: aqiData,
      uv: { uv_index: weatherData.hourly.uv_index, time: weatherData.hourly.time },
      sunrise: weatherData.daily.sunrise,
      sunset: weatherData.daily.sunset,
      feelLike: { apparent_temperature: weatherData.current.apparent_temperature, actual_temperature: weatherData.current.temperature_2m },
      precipitation: { rain: weatherData.daily.rain_sum, units: weatherData.daily_units.rain_sum },
      visibility: weatherData.current.visibility,
      humidity: weatherData.current.relative_humidity_2m,
      dewpoint: weatherData.hourly.dew_point_2m,
      startIndex: finalStartIndex
    };
  } catch (error) {
    console.error("fetch error", error);
    throw error;
  }
};

