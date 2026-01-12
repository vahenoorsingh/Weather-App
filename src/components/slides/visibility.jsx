import "./visibility.css"

function VisibilitySlide({ visibilityData }) {
    console.log(visibilityData)
    const visibility = Math.round(visibilityData / 1000)
    const getVisibilityDescription = (km) => {
        if (km >= 16) return "It’s perfectly clear right now.";
        if (km >= 10) return "The air is clear; visibility is good.";
        if (km >= 5) return "Light haze is reducing visibility.";
        if (km >= 2) return "Moderate mist is affecting the view.";
        return "Visibility is very low due to dense fog.";
    };
    return (
        <div className="visibilitySlide slide">
            <div className="Title">
                <span class="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>
                    visibility
                </span>
                <span>VISIBILITY</span>
            </div>
            <div className="visibilityInfo">
                <div style={{ fontSize: '2.5rem' }}>{visibility}km</div>
                <div style={{ fontSize: '0.9rem' }}>{getVisibilityDescription(visibility)}</div>
            </div>
        </div>
    )
}
export default VisibilitySlide