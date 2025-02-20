import { useState } from "react"
import GetWeather from "./weather";
export default function App (){
  const [weather, setWeather] = useState({
    date : "20-02-2025",
    location : "Bengaluru",
    imgUrl : "idk",
    temperature : 13,
    highs : 27,
    lows : 10
  })

  function  handleChange(e){
    let {name, value, type} = e.target;
    setWeather(prev=>({
      ...prev,
      location : value
    }))
  }





  return(
      <main className="main-container">
        <form className="search-form">
          
          <input value={weather.location} type="text" width= "150" placeholder="Eg. Bengaluru" name="search-bar" onChange={(e)=>handleChange(e)}/>
          <button  id="search-button" onClick={(e)=>GetWeather(e,weather,setWeather)}>
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios/50/search.png"
            alt="search"
          />
        </button>
        </form>
        <div className="display-container">
          <div className="display-date-container">
            <p id="date" >{weather.date}</p>
          </div>
          <div className="display-location-container">
            <h1 id="location">{weather.location}</h1>
          </div>
          <div className="display-image-container">
            <img  id="image" />
          </div>
          <div className="display-temp-container">
            <h2 id="temp">{weather.temperature}°C</h2>
          </div>
          <div className="display-high-low-container">
            <div className="high">
              <h3>Highs</h3>
              <h2 id="highs">{weather.highs}°C</h2>
            </div>
            <div className="low">
              <h3>Lows</h3>
              <h2 id="highs">{weather.lows}°C</h2>
            </div>
          </div>
        </div>
      </main>
  )
}