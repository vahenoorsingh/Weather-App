import React from "react";

function GeneralData({ data, locationName, maxTemp, minTemp }) {
    console.log(data)
    return (
        <div className="generalData">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span class="material-symbols-outlined" style={{ paddingBottom: '2px' }}>
                    location_on
                </span>
                <span style={{ fontSize: '1.5rem' }}>{locationName}</span>
            </div>
            <div style={{ fontSize: '3rem', paddingLeft: '10px' }}>{data.temperature_2m}°</div>
            <div style={{ fontSize: '1rem' }}>Clear</div>
            <div style={{ fontSize: '1.2rem' }}>H:{parseInt(maxTemp, 10)}° L:{parseInt(minTemp, 10)}°</div>
        </div>
    )
}
export default GeneralData