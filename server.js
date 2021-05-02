/**
 * Provides Express Server Implementation for Production and API Layer
 * @licence MIT
 * @copyright 2021 T.H. Case
 * @author thcase <thcase@outlook.com>
 */

// NPM Imports
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const axios = require('axios')
const path = require('path')

// Local Imports
const GeoLocationService = require('./src/services/GeoLocation/GeoLocationService')
const WeatherService = require('./src/services/Weather/WeatherService')

// setup App
const port = process.env.port || 3000
const app = express()

app.use(cors())
app.use(morgan('combined'))

// Express Routes
app.use(express.static(path.join(__dirname, 'build')))

app.use('/api/getGeoLocation/:address', (req, res) => {
  GeoLocationService.getLocationInformation(req.params.address)
    .then(response => res.json(response))
    .catch(error => {
      console.error(error)
    })
})


app.use('/api/Weather/:lat/:lng', (req, res) => {
  WeatherService.getWeather(req.params.lat, req.params.lng)
    .then(response => res.json(response))
    .catch(error => {
      console.error(error)
    })
})

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// Start Server
app.listen(port, () => {
  console.log('Listening on Port: ', port)
})
