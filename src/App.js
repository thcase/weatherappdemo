/**
 * Main Weather App Demo Application
 * @licence MIT
 * @copyright 2021 T.H. Case
 * @author thcase <thcase@outlook.com>
 */

// NPM Imports
import React, { useState, useEffect } from "react"

// Local Imports
import './App.css'
import { Footer, Header } from './components/shared'
import { SearchForm } from "./components/search"
import { CurrentWeather, WeatherAlerts, WeatherForecast } from "./components/weather"
import ApiService from "./services/apiService"


function App() {
  const [address, setAddress] = useState('')
  const [searchVal, setSearchVal] = useState('')
  const [location, setLocation] = useState(null)
  const [weather, setWeather] = useState(null)

  // API Calls
  const fetchLocation = (address) => {
    ApiService.fetchLocation(address)
      .then(response => {
        console.log('Location Data received: ', response.data)
        setLocation(response.data)
      })
      .catch(error => console.log("Error fetching geolocation data: ", error))
  }

  const fetchWeather = (location) => {
    ApiService.fetchWeather(location.lat, location.lng)
      .then(response => {
        console.log('Weather Data received', response.data)
        setWeather(response.data)
      })
      .catch(error => console.error("Error fetching weather data: ", error))
  }

  // Monitor changes with useEffect
  useEffect(() => {
    if (address && address.length > 0) {
      fetchLocation(address)
    }
  }, [address])

  useEffect(() => {
    if (location) {
      fetchWeather(location)
    }
  }, [location])

  // Search Form Submit Function
  const handleSubmit = (event) => {
    event.preventDefault()
    setAddress(searchVal)
  }

  // Render main App
  return (
    <div className="App">
      <Header/>
      <div className="main container">
        <SearchForm onSubmit={handleSubmit} onChange={setSearchVal} searchVal={searchVal}/>
        <CurrentWeather address={address} weather={weather}/>
        <WeatherAlerts weather={weather}/>
        <WeatherForecast weather={weather}/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
