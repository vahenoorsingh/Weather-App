import "./dailyForecast.css"

function DailyForecastSlide() {

    return (
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
    )
}

export default DailyForecastSlide