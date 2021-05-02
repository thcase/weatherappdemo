/**
 * Provides Weather Service for API
 * @licence MIT
 * @copyright 2021 T.H. Case
 * @author thcase <thcase@outlook.com>
 */

import service from './WeatherService'
import knownGeoLocationData from '../GeoLocation/sample-geo-location-data'
import knownWeatherData from './sample-weather-data'

describe("WeatherService should: ", () => {
  it("Return Data for known Location", async () => {
    const location = knownGeoLocationData.results[0].geometry.location
    const data = await service.getWeather(location.lat, location.lng)
    expect(data).toBeDefined()
    expect(data.current).toBeDefined()
    expect(data.hourly).toBeDefined()
    expect(data.daily).toBeDefined()
    expect(data.timezone).toBeDefined()
    expect(data.timezone).toEqual(knownWeatherData.timezone)
    expect(data.lat).toBeDefined()
    expect(data.lon).toBeDefined()
  })
})
