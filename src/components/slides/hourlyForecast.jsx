import "./hourlyForecast.css"
function HourlyForecastSlide({ hourlyData }) {
    if (!hourlyData) return null;
    // console.log(hourlyData)
    const currentHour = new Date().getHours()
    const startIndex = hourlyData.time.findIndex(t => t.includes(`T${currentHour.toString().padStart(2, '0')}:00`))
    const finalStartIndex = startIndex === -1 ? 0 : startIndex
    const temperatures = hourlyData.temperature_2m.slice(finalStartIndex, finalStartIndex + 24)
    const times = hourlyData.time.slice(finalStartIndex, finalStartIndex + 24)
    const weatherCodes = hourlyData.weather_code.slice(finalStartIndex, finalStartIndex + 24)
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
        <div className="hourlyForecastSlide slide">
            <div className="overview">Sunny conditions expected aroud 1pm. Wind gust are upto 11km/ph</div>
            <div className="hourContainer">
                {/* <div className="hourContent">
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Now</div>
                    <span class="material-symbols-outlined" style={{ fontSize: '2rem' }}>
                        partly_cloudy_day
                    </span>
                    <div style={{ fontSize: '1.7rem' }}>15°</div>
                </div> */}

                {temperatures.map((temp, index) => {
                    const timeInt = parseInt(times[index].split('T')[1].slice(0, 2), 10)
                    let hourString = timeInt < 12 ? ((timeInt).toString() + 'AM') : ((timeInt - 12).toString() + 'PM')
                    if (hourString[0] === '0') {
                        hourString = hourString.slice(1, 3)
                        hourString = '12' + hourString
                    }
                    const tempString = parseInt(temp, 10).toString() + "°"
                    return (
                        <div className="hourContent" key={crypto.randomUUID()}>
                            <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{index === 0 ? 'Now' : hourString}</div>
                            <span class="material-symbols-outlined" style={{ fontSize: '2rem' }}>
                                {weatherIconMap[weatherCodes[index]]}
                            </span>
                            <div style={{ fontSize: '1.7rem' }}>{tempString}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HourlyForecastSlide
