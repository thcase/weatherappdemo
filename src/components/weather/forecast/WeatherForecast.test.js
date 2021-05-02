/**
 * Unit Test for Weather Forecast Component
 * @licence MIT
 * @copyright 2021 T.H. Case
 * @author thcase <thcase@outlook.com>
 */

// NPM Imports
import { act } from "react-dom/test-utils"
import { render, unmountComponentAtNode } from "react-dom"

// Local Imports
import sampleWeatherData from "../../../services/Weather/sample-weather-data"
import WeatherForecast from "./WeatherForecast"
import CurrentWeather from "../current/CurrentWeather"

// Tests
describe("Weather Forecast Component should", () => {
  let container = null

  beforeEach(() => {
    container = document.createElement("div")
    document.body.appendChild(container)
  })

  afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
  })

  it("Return empty string if there is no weather data", () => {
    const weather = null
    act(() => {
      render(<WeatherForecast weather={weather}/>, container)
    })
    expect(container.textContent).toBe('')
  })

  it("Return Current Weather information when weather data is present", () => {
    const weather = sampleWeatherData
    act(() => {
      render(<WeatherForecast weather={weather}/>, container)
    })
    expect(container.textContent).not.toBe('')
    const weatherForecastElement = document.getElementById('weather-forecast')
    expect(weatherForecastElement.childNodes.length).toBe(3)
    expect(weatherForecastElement.childNodes[1].childNodes.length).toBe(1)
    expect(weatherForecastElement.childNodes[1].childNodes[0].childNodes.length).toBe(2)
    expect(weatherForecastElement.childNodes[2].childNodes.length).toBe(2)
  })

})
