import "./humidity.css"

function HumiditySlide({ humidityData, startIndex, dewPointData }) {
    // console.log(dewPointData)

    return (
        <div className="humiditySlide slide">
            <div className="Title">
                <span class="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>
                    humidity_percentage
                </span>
                <span>HUMIDITY</span>
            </div>
            <div className="humidityInfo">
                <div style={{ fontSize: '2.3rem' }}>{humidityData}%</div>
                <div>Dew point is {dewPointData[startIndex]} right now</div>
            </div>
        </div>
    )
}

export default HumiditySlide