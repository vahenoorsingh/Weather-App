import "./clouds.css"

const Clouds = () => {
    const cloudCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (
        <div className="clouds-container">
            {cloudCount.map((id) => (
                <div key={id} className={`cloud cloud-${id}`}>{ }</div>
            ))}
        </div>
    )
}

export default Clouds;