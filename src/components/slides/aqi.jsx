import "./aqi.css"

function AqiSlide() {
    return (
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
    )
}
export default AqiSlide