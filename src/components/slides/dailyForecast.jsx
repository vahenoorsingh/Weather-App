import "./dailyForecast.css"

function DailyForecastSlide({ dailyData }) {
    const index = 10
    const maxTempData = dailyData.temperature_2m_max.slice(0, index)
    const minTempData = dailyData.temperature_2m_min.slice(0, index)
    const timeData = dailyData.time.slice(0, index)
    const weeklyMin = Math.min(...dailyData.temperature_2m_min)
    const weeklyMax = Math.max(...maxTempData)
    const totalRange = weeklyMax - weeklyMin;
    console.log(dailyData)
    return (
        <div className="dailyForecastSlide slide">
            <div className="dailyTitle">
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
                        <div className="dailyCard" key={crypto.randomUUID()}>
                            <span>{shortDay}</span>
                            <span class="material-symbols-outlined" style={{ fontSize: '1.6rem', display: 'flex', justifyContent: 'center' }}>
                                sunny
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