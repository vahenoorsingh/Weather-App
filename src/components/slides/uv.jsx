import "./uv.css";

function UvSlide({ uvData }) {
    // console.log(uvData)
    const currentHour = new Date().getHours()
    const startIndex = uvData.time.findIndex(t => t.includes(`T${currentHour.toString().padStart(2, '0')}:00`))
    const finalStartIndex = startIndex === -1 ? 0 : startIndex
    const uvIndex = Math.round(uvData.uv_index[finalStartIndex])
    const leftOffset = ((uvIndex / 10) * 100) > 100 ? 100 : ((uvIndex / 10) * 100);
    const uvDescription = ((i) => {
        if (i <= 2) { return 'Low' }
        else if (i <= 5) { return 'Moderate' }
        else if (i <= 7) { return 'High' }
        else if (i <= 10) { return 'Very High' }
        else { return 'Extreme' }

    })
    return (
        <div className="uvSlide slide">
            <div className="Title">
                <span class="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>
                    sunny
                </span>
                <span>UV INDEX</span>
            </div>
            <div className="uvInfo">
                <div style={{ fontSize: '2.2rem', fontWeight: 'bold' }}>{uvIndex}</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{uvDescription(uvIndex)}</div>
                <span className="uvSlider"><div className="aqiDot" style={{ left: `${leftOffset}%` }}></div></span>
            </div>
        </div>
    )
}
export default UvSlide