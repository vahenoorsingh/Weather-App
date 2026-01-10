import "./wind.css"

function Wind({ windData }) {
    const ticks = Array.from({ length: 72 })
    const windDirection = windData.wind_direction_10m + 90;
    // console.log(windData)
    const getCardinalDirection = (angle) => {
        const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
        return directions[Math.round(angle / 45) % 8];
    };
    return (
        <div className="windSlide slide">
            <div className="Title">
                <span class="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>
                    air
                </span>
                <span>WIND</span>
            </div>
            <div className="windInfoContainer">
                <div className="windInfo">
                    <div className="windFactor" style={{ paddingTop: '5px', paddingBottom: '10px', borderBottom: '1px rgba(255, 255, 255, 0.3) solid' }}>
                        <span>Wind</span><span style={{ color: 'rgba(255,255,255,0.7)' }}>{parseInt(windData.wind_speed_10m)} km/h</span>
                    </div>
                    <div className="windFactor" style={{ paddingTop: '10px', paddingBottom: '10px', borderBottom: '1px rgba(255, 255, 255, 0.3) solid' }}>
                        <span>Gusts</span><span style={{ color: 'rgba(255,255,255,0.7)' }}>{parseInt(windData.wind_gusts_10m)} km/h</span>
                    </div>
                    <div className="windFactor" style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                        <span>Direction</span><span style={{ color: 'rgba(255,255,255,0.7)' }}>{parseInt(windData.wind_direction_10m)}° {getCardinalDirection(windData.wind_direction_10m)}</span>
                    </div>
                </div>
                <div className="wind-compass">
                    <span className="n">N</span>
                    <span className="s">S</span>
                    <span className="e">E</span>
                    <span className="w">W</span>
                    {/* <div className="tick" style={{ '--angle': `0deg` }}></div> */}
                    {ticks.map((_, i) => {
                        if (((i * 5) % 90) <= 15 || ((i * 5) % 90) >= 75) { return null; }
                        return (
                            <div className="tick" style={{ '--angle': `${i * 5}deg` }} key={i}></div>
                        );
                    })}
                    <span className="compassSpeed">
                        <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{parseInt(windData.wind_speed_10m)}</div>
                        <div style={{ fontSize: '0.8rem' }}>km/h</div>
                    </span>
                    <span class="material-symbols-outlined compassForwardArrow" style={{ transform: `rotate(${windDirection}deg) translateX(45px)` }}>
                        line_end_arrow_notch
                    </span>
                    <span class="material-symbols-outlined compassBackwardArrow" style={{ transform: `rotate(${windDirection + 180}deg) translateX(45px)` }}>
                        line_end_circle
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Wind