import "./precipitation.css";
function PrecepitationSlide({ rainData }) {
    console.log(rainData)
    const maxRain = Math.max(...rainData.rain)
    const message = maxRain === 0 ? "None expected in next 14 days." : `precipitation upto ${maxRain}${rainData.units} expected in next 14 days.`

    return (
        <div className="precepitationSlide slide">
            <div className="Title">
                <span class="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>
                    water_drop
                </span>
                <span>PRECIPITATION</span>
            </div>
            <div className="rainInfo">
                <div>
                    <div style={{ fontSize: '2.3rem' }}>{rainData.rain[0]}{rainData.units}</div>
                    <div style={{ fontWeight: 'bold' }}>Today</div>
                </div>
                <div style={{ fontSize: '0.9rem' }}>{message}</div>
            </div>
        </div>
    )
}
export default PrecepitationSlide