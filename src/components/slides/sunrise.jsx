// import { useState } from "react";
import "./sunrise.css"
function SunriseSlide({ sunset, sunrise }) {
    // console.log(sunrise)
    // console.log(sunset)
    const now = new Date().getTime();
    const getNextEvent = ((now) => {

        const nextSunrise = sunrise.map(t => new Date(t).getTime()).find(t => t > now)
        const nextSunset = sunset.map(t => new Date(t).getTime()).find(t => t > now)

        if (nextSunset < nextSunrise) {
            return { type: 'SUNSET', time: nextSunset }
        }
        else {
            return { type: 'SUNRISE', time: nextSunrise }
        }
    })
    const nextEvent = getNextEvent(now);
    const nextEvent2 = getNextEvent(nextEvent.time);
    const tempText = nextEvent2.type === 'SUNSET' ? 'Sunset' : 'Sunrise'
    return (
        <div className="sunsetSlide slide">
            <div className="Title">
                <span class="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>
                    routine
                </span>
                <span>{nextEvent.type}</span>
            </div>
            <div className="sunsetTime" style={{ fontSize: '1.6rem' }}>{new Date(nextEvent.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
            <svg width={'100%'} height={'60px'} viewBox="0 0 100 50">
                <path d="M 0 40 Q 50 -20, 100 40" stroke="white" strokeWidth={'5'} fill="none" />
            </svg>
            <div className="sunriseTime" style={{ fontSize: '0.9rem' }}>{tempText}: {new Date(nextEvent2.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
        </div>
    )
}
export default SunriseSlide