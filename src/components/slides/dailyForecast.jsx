import "./dailyForecast.css"

function DailyForecastSlide({ dailyData }) {
    const index = 10
    const maxTempData = dailyData.temperature_2m_max.slice(0, index)
    const minTempData = dailyData.temperature_2m_min.slice(0, index)
    const timeData = dailyData.time.slice(0, index)
    const weeklyMin = Math.min(...dailyData.temperature_2m_min)
    const weeklyMax = Math.max(...maxTempData)
    const totalRange = weeklyMax - weeklyMin;
    // console.log(dailyData)
    const weatherIconMap = {
        0: 'sunny',
        1: 'partly_cloudy_day', 2: 'partly_cloudy_day',
        3: 'cloud',
        45: 'foggy', 48: 'foggy',
        51: 'rainy_light', 53: 'rainy', 55: 'rainy_heavy',
        61: 'rainy', 63: 'rainy', 65: 'rainy_heavy',
        66: 'weather_hail', 67: 'weather_hail',
        71: 'snowing', 73: 'snowing', 75: 'snowing_heavy',
        77: 'weather_snowy',
        80: 'rainy', 81: 'rainy', 82: 'rainy_heavy',
        85: 'snowing', 86: 'snowing_heavy',
        95: 'thunderstorm', 96: 'thunderstorm', 99: 'thunderstorm'
    }
    return (
        <div className="dailyForecastSlide slide">
            <div className="Title">
                <span class="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>
                    calendar_month
                </span>
                <span>DAILY FORECAST</span>
            </div>
            <div className="dailyCardContainer">
                {/* <div className="dailyCard">
                    <span>Today</span>
                    <span class="material-symbols-outlined" style={{ fontSize: '1.6rem', display: 'flex', justifyContent: 'center' }}>
                        sunny
                    </span>
                    <span className="dailySliderConatiner">
                        <span style={{ display: 'flex', justifyContent: 'center' }}>6°</span>
                        <span className="dailySlider"></span>
                        <span style={{ display: 'flex', justifyContent: 'center' }}> 16°</span>
                    </span>
                </div> */}
                {timeData.map((time, index) => {
                    const dateObject = new Date(time)
                    const shortDay = dateObject.toLocaleDateString('en-US', { weekday: 'short' })
                    const leftOffset = (((minTempData[index]) - weeklyMin) / totalRange) * 100;
                    const width = (((maxTempData[index] - minTempData[index])) / totalRange) * 100;
                    return (
                        <div className="dailyCard" key={index}>
                            <span>{shortDay}</span>
                            <span class="material-symbols-outlined" style={{ fontSize: '1.6rem', display: 'flex', justifyContent: 'center' }}>
                                {weatherIconMap[dailyData.weather_code[index]]}
                            </span>
                            <span className="dailySliderConatiner">
                                <span style={{ display: 'flex', justifyContent: 'center' }}>{parseInt(minTempData[index])}°</span>
                                <div className="dailySlider"><div className="sliderBar" style={{ left: `${leftOffset}%`, width: `${width}%` }}></div></div>
                                <span style={{ display: 'flex', justifyContent: 'center' }}>{parseInt(maxTempData[index])}°</span>
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DailyForecastSlide