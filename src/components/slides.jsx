// import { React } from "react";
import HourlyForecastSlide from "./slides/hourlyForecast";
import DailyForecastSlide from "./slides/dailyForecast";
import AqiSlide from "./slides/aqi";
import Wind from "./slides/wind";
import UvSlide from "./slides/uv";
import SunriseSlide from "./slides/sunrise";
import FeelLikeSlide from "./slides/feelLike";


function Slides({ data }) {
  // console.log(data)
  return (
    <div className="slidesContainer">
      <HourlyForecastSlide hourlyData={data.hourly} />
      <DailyForecastSlide dailyData={data.daily} />
      <AqiSlide aqiData={data.aqi} />
      <div className="precepitationmapSlide slide"></div>
      <Wind windData={data.current} />
      <UvSlide uvData={data.uv} />
      <SunriseSlide sunrise={data.sunrise} sunset={data.sunset} />
      <FeelLikeSlide feelLikeData={data.feelLike} />
      <div className="precepitationSlide slide"></div>
      <div className="moonSlide slide"></div>
      <div className="humiditySlide slide"></div>
      <div className="visibilitySlide slide"></div>
      <div className="pressureSlide slide"></div>
      <div className="averagesSlide slide"></div>
    </div>
  );
}
export default Slides;
