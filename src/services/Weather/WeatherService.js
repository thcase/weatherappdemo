/**
 * Provides Service Layer for Weather Service (supports running in Node.js)
 * @licence MIT
 * @copyright 2021 T.H. Case
 * @author thcase <thcase@outlook.com>
 */

// NPM Imports
const axios = require('axios')

// Local Imports
const config = require('../../config/index')

// Constants and Methods
const OpenWeatherApiBase = 'https://api.openweathermap.org/data/2.5/onecall?'

const getWeather = async (lat, lng) => {
  const url = `${OpenWeatherApiBase}lat=${lat}&lon=${lng}&exclude=minutely&appid=${config.weatherApiKey}`
  try {
    const response = await axios.get(url)
    if (response && response.data) {
      return response.data
    } else {
      throw new Error("Response did not contain data")
    }
  } catch (e) {
    console.error('Error returned from request', e)
    throw new Error(`Error getting Weather Data: ${e.message}`)
  }
}

const WeatherService = {
  getWeather
}

module.exports = WeatherService
