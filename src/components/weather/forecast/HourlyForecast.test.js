/**
 * Unit Test for Hourly Forecast Component
 * @licence MIT
 * @copyright 2021 T.H. Case
 * @author thcase <thcase@outlook.com>
 */

/**
 * Unit test for Daily Forecast Component
 * @licence MIT
 * @copyright 2021 T.H. Case
 * @author thcase <thcase@outlook.com>
 */

// NPM Imports
import { act } from "react-dom/test-utils"
import { render, unmountComponentAtNode } from "react-dom"

// Local Imports
import HourlyForecast from "./HourlyForecast"
import sampleWeatherData from "../../../services/Weather/sample-weather-data"

// Tests
describe("Hourly Forecast Component should: ", () => {
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

  it("Return built component", () => {
    const forecast = sampleWeatherData.hourly[0]
    const index = 0
    const offset = sampleWeatherData.timezone_offset
    act(() => {
      render(<HourlyForecast forecast={forecast} index={0} offset={offset}/>, container)
    })
    expect(container.textContent).not.toBe('')
    const dailyForeCastComponentElements = document.getElementsByClassName('card-forecast')
    expect(dailyForeCastComponentElements.length).toBe(1)
    expect(dailyForeCastComponentElements[0].childNodes.length).toBe(2)
    expect(dailyForeCastComponentElements[0].childNodes[0].childNodes.length).toBe(3)
    expect(dailyForeCastComponentElements[0].childNodes[1].childNodes.length).toBeGreaterThanOrEqual(11)
  })
})

