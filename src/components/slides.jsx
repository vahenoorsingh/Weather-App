import { React } from "react";

function Slides() {
    return (
        <div className="slidesContainer">
            <div className="hourlyForecastSlide slide">
                <div className="overview">Sunny conditions expected aroud 1pm. Wind gust are upto 11km/ph</div>
                <div className="hourContainer">
                    <div className="hourContent">
                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Now</div>
                        <span class="material-symbols-outlined" style={{ fontSize: '2rem' }}>
                            partly_cloudy_day
                        </span>
                        <div style={{ fontSize: '1.7rem' }}>15°</div>
                    </div>
                    <div className="hourContent">
                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Now</div>
                        <span class="material-symbols-outlined" style={{ fontSize: '2rem' }}>
                            partly_cloudy_day
                        </span>
                        <div style={{ fontSize: '1.7rem' }}>15°</div>
                    </div>
                </div>
            </div>
            <div className="dailyForecastSlide slide">
                <div className="dailyTitle">
                    <span class="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>
                        calendar_month
                    </span>
                    <span>DAILY FORECAST</span>
                </div>
                <div className="dailyCardContainer">
                    <div className="dailyCard">
                        <span>Today</span>
                        <span class="material-symbols-outlined" style={{ fontSize: '1.6rem', display: 'flex', justifyContent: 'center' }}>
                            sunny
                        </span>
                        <span className="dailySliderConatiner">
                            <span style={{ display: 'flex', justifyContent: 'center' }}>6°</span>
                            <span className="dailySlider"></span>
                            <span style={{ display: 'flex', justifyContent: 'center' }}> 16°</span>
                        </span>
                    </div>
                    <div className="dailyCard">
                        <span>Today</span>
                        <span class="material-symbols-outlined" style={{ fontSize: '1.6rem', display: 'flex', justifyContent: 'center' }}>
                            sunny
                        </span>
                        <span className="dailySliderConatiner">
                            <span style={{ display: 'flex', justifyContent: 'center' }}>6°</span>
                            <span className="dailySlider"></span>
                            <span style={{ display: 'flex', justifyContent: 'center' }}> 16°</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="aqiSlide slide">
                <div className="dailyTitle">
                    <span class="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>
                        pulmonology
                    </span>
                    <span>AIR QUALITY</span>
                </div>
                <div className="aqiContent">
                    <span style={{ fontSize: '1.7rem', fontWeight: 'bold' }}>97</span>
                    <span style={{ fontSize: '1rem' }}>Satisfactory</span>
                    <span className="aqiSlider"></span>
                    <span style={{ fontSize: '1rem' }}>aqi is 97</span>
                </div>
            </div>
            <div className="precepitationmapSlide slide"></div>
            <div className="windSlide slide">

            </div>
            <div className="uvSlide slide"></div>
            <div className="sunsetSlide slide"></div>
            <div className="feellikeSlide slide"></div>
            <div className="precepitationSlide slide"></div>
            <div className="moonSlide slide"></div>
            <div className="humiditySlide slide"></div>
            <div className="visibilitySlide slide"></div>
            <div className="pressureSlide slide"></div>
            <div className="averagesSlide slide"></div>
        </div >
    );
}
export default Slides