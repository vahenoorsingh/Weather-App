import './App.css'
import { useState, useEffect } from 'react'
import GeneralData from './components/generalData'
import Slides from './components/slides'
import { getWeatherData } from './services/weatherServices.jsx'
import Clouds from './components/clouds.jsx'

function App() {
  const [weather, setWeather] = useState(null)
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeatherData();
        setWeather(data)
      }
      catch (error) {
        console.error(error)
      }
    }
    fetchWeather()
  }, [])

  // console.log(weather)
  if (!weather) {
    return <div className="loading">Loading Weather Data...</div>;
  }

  const bgMap = {
    0: "bg-night",
    1: "bg-afternoon",
    2: "bg-evening"
  }
  const bgClass = bgMap[weather.bgIndex]

  return (
    <div className="appContainer">
      <div className={`background-wrapper ${bgClass}`}>
        <Clouds />
      </div>
      <div className='stars'></div>
      <GeneralData data={weather.current} locationName={weather.location} maxTemp={weather.daily.temperature_2m_max[0]} minTemp={weather.daily.temperature_2m_min[0]} />
      <Slides data={weather} />
    </div>
  )
}

export default App
