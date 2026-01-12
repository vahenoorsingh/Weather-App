import "./feelLike.css"

function FeelLikeSlide({ feelLikeData }) {
    // console.log(feelLikeData)
    let message = ""
    const apt = Math.round(feelLikeData.apparent_temperature);
    const act = Math.round(feelLikeData.actual_temperature)
    if (apt === act) {
        message = "Which is similar to actual temperature."
    }
    else if (apt > act) {
        message = "Feels warmer than actual temperature."
    }
    else {
        message = "Feels cooler than actual temperature."
    }
    return (

        <div className="feellikeSlide slide">
            <div className="Title">
                <span class="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>
                    device_thermostat
                </span>
                <span>FEELS LIKE</span>
            </div>
            <div className="feelLikeInfo">
                <div style={{ fontSize: '2.3rem' }}>{apt}°</div>
                <div style={{ fontSize: '0.9rem', marginTop: '20px' }}>{message}</div>
            </div>
        </div>

    )
}

export default FeelLikeSlide;