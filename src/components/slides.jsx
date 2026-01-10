import { React } from "react";
import HourlyForecastSlide from "./slides/hourlyForecast";
import DailyForecastSlide from "./slides/dailyForecast";
import AqiSlide from "./slides/aqi";
import Wind from "./slides/wind";

function Slides({ data }) {
  // console.log(data)
  return (
    <div className="slidesContainer">
      <HourlyForecastSlide hourlyData={data.hourly} />
      <DailyForecastSlide dailyData={data.daily} />
      <AqiSlide aqiData={data.aqi} />
      <div className="precepitationmapSlide slide"></div>
      {/* <div className="windSlide slide"></div> */}
      <Wind windData={data.current} />
      <div className="uvSlide slide"></div>
      <div className="sunsetSlide slide"></div>
      <div className="feellikeSlide slide"></div>
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
