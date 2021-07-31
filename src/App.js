import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import Forecast from './components/Forecast';
import { Loader } from 'semantic-ui-react'

const URL = 'https://api.openweathermap.org/data/2.5/onecall'
const API_KEY = '7ce1df618a11e357d3f5c77b4f217d97'

function App() {
const   [latitude, setlatitude]= useState(null);
const   [longitude, setlongitude]= useState(null);
const   [city, setCity]= useState(null);
const   [temprature, setTemprature]= useState(null);
const   [humidity, setHumidity]= useState(null);
const   [sunrise, setSunrise]= useState(null);
const   [sunset, setSunset]= useState(null);
const   [icon, setIcon]= useState(null);
const   [forcast, setForecast]= useState([]);
const   [loading, setloading]= useState(true);

useEffect(() => {
  navigator.geolocation.getCurrentPosition(function(position) {
    setlatitude(position.coords.latitude);
    setlongitude(position.coords.longitude);
  });


   axios.get('${URL}?lat=$(latitude)&lon=$(longitude)&exclude=hourly,minutely&appid= ${API_KEY}')
   
  .then((weatherData) => {     
    setloading(false)
    setTemprature(weatherData.data.current.temp)
    setSunrise(weatherData.data.current.Sunrise)
    setSunset(weatherData.data.current.Sunset)
    setHumidity(weatherData.data.current.Humidity)
    setCity(weatherData.data.timezone)
    setIcon(weatherData.data.current.weather[0].main)
    setForecast(weatherData.data.daily) 
  })
  },[latitude, longitude])

  return (
    <div className="mian">
      <Header/>
      {loading ? (
        <div>
        <p>loading..Please wait </p>
        <Loader active inline='centered' />
        </div> 
      ):(
        <WeatherCard 
      temprature={temprature}
      humidity={humidity}
      sunrise={sunrise}
      sunset={sunset}
      city={city}
      icon={icon}
      />        
      )}
      
      <Forecast forcast= {forcast}/>
    </div>
  );
}

export default App;
