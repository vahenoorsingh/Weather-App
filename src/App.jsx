import './App.css'
import { useState, useEffect } from 'react'
import GeneralData from './components/generalData'
import Slides from './components/slides'
import { getWeatherData } from './services/weatherServices.jsx'
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
  console.log(weather)
  if (!weather) {
    return <div className="loading">Loading Weather Data...</div>;
  }

  return (
    <div className="appContainer">
      <GeneralData />
      <Slides data={weather} />
    </div>
  )
}

export default App
