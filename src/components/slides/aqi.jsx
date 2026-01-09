import "./aqi.css"

function AqiSlide({ aqiData }) {
    const aqiValue = aqiData.elevation
    let status = 'Good'
    if (aqiValue <= 50) { status = 'Good' }
    else if (aqiValue <= 100) { status = 'Satisfactory' }
    else if (aqiValue <= 200) { status = 'Moderately Polluted' }
    else if (aqiValue <= 300) { status = 'Poor' }
    else if (aqiValue <= 400) { status = 'Very Poor' }
    else { status = 'Severe' }
    const leftOffset = `${(aqiValue / 500) * 100}%`
    return (
        <div className="aqiSlide slide">
            <div className="dailyTitle">
                <span class="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>
                    pulmonology
                </span>
                <span>AIR QUALITY</span>
            </div>
            <div className="aqiContent">
                <span style={{ fontSize: '1.7rem', fontWeight: 'bold' }}>{aqiValue}</span>
                <span style={{ fontSize: '1rem' }}>{status}</span>
                <span className="aqiSlider"><div className="aqiDot" style={{ left: leftOffset }}></div></span>
                <span style={{ fontSize: '1rem' }}>Air quality index is {aqiValue}</span>
            </div>
        </div>
    )
}
export default AqiSlide