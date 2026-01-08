import "./hourlyForecast.css"
function HourlyForecastSlide(hourlyData) {
    console.log(hourlyData)
    return (
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
    )
}

export default HourlyForecastSlide
