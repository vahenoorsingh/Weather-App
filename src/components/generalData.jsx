import React from "react";

function GeneralData() {
    return (
        <div className="generalData">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span class="material-symbols-outlined" style={{ paddingBottom: '2px' }}>
                    location_on
                </span>
                <span style={{ fontSize: '1.5rem' }}>Jalandhar</span>
            </div>
            <div style={{ fontSize: '3rem', paddingLeft: '10px' }}>9°</div>
            <div style={{ fontSize: '1rem' }}>Clear</div>
            <div style={{ fontSize: '1.2rem' }}>H:16℃ L:6℃</div>
        </div>
    )
}
export default GeneralData