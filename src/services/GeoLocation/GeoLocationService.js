/**
 * Provides Geolocation Service for API
 * @licence MIT
 * @copyright 2021 T.H. Case
 * @author thcase <thcase@outlook.com>
 */

// NPM Imports
const axios = require('axios')

// Local Imports
const config = require('../../config/index')

// Constants and Methods
const GoogleMapsGeoCodeAPIBase = 'https://maps.googleapis.com/maps/api/geocode/'

const getLocationInformation = async (address) => {
  const url = `${GoogleMapsGeoCodeAPIBase}json?address=${address}&key=${config.geoLocationServiceApiKey}`

  try {
    const response = await axios.get(url)
    if (response.data && response.data.results && response.data.results.length > 0) {
      const data = response.data.results[0]
      const geometry = data.geometry
      return geometry.location
    } else {
      throw new Error("Could not find data in response")
    }
  } catch (e) {
    console.error('Error Returned from request', e)
    throw new Error(`Error when calling GeoLocation Service: ${e.message}`)
  }
}


// Setup Export
const GeoLocationService = {
  getLocationInformation
}

// Export Default
module.exports = GeoLocationService
