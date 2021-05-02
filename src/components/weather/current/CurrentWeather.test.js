/**
 * Provides Unit test for Current Weather Component
 * @licence MIT
 * @copyright 2021 T.H. Case
 * @author thcase <thcase@outlook.com>
 */

// NPM Imports
import { act } from "react-dom/test-utils"
import { render, unmountComponentAtNode} from "react-dom"

// Local Imports
import CurrentWeather from "./CurrentWeather"
import sampleWeatherData from "../../../services/Weather/sample-weather-data"

// Tests
describe("Current Weather Component should:", () => {
  let container = null

  beforeEach(() => {
    container = document.createElement("div")
    document.body.appendChild(container)
  })

  afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
  });

  it("Return empty string if there is no weather data", () => {
    const weather = null
    const address = "Seattle"
    act( () => {
      render(<CurrentWeather weather={weather} address={address}/>, container )
    })
    expect(container.textContent).toBe('')
  });

  it("Return Current Weather information when weather data is present", () => {
    const weather = sampleWeatherData
    const address = "Seattle"
    act( () => {
      render(<CurrentWeather weather={weather} address={address}/>, container )
    })
    expect(container.textContent).not.toBe('')
    const currentWeatherElement = document.getElementById('Current-Weather')
    expect(currentWeatherElement.childNodes.length).toBe(3)
    expect(currentWeatherElement.childNodes[1].childNodes.length).toBe(1)
    expect(currentWeatherElement.childNodes[2].childNodes.length).toBe(5)
  });
});
