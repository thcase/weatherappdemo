/**
 * Provides Unit Test for Weather Alert Component
 * @licence MIT
 * @copyright 2021 T.H. Case
 * @author thcase <thcase@outlook.com>
 */

// NPM Imports
import { act } from "react-dom/test-utils"
import { render, unmountComponentAtNode } from 'react-dom'

// Local Imports
import WeatherAlerts from './WeatherAlerts'
import sampleWeatherData from '../../../services/Weather/sample-weather-data'

// Tests
describe('Weather Alerts Component should:', () => {
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

  it('Return empty string if there are no alerts ', () => {
    const weather = { alerts: [] }
    act(() => {
      render(<WeatherAlerts weather={weather}/>, container)
    })
    expect(container.textContent).toBe('')
  })

  it('Return Alerts when data present', () => {
    const weather = sampleWeatherData
    act(() => {
      render(<WeatherAlerts weather={weather}/>, container)
    })
    expect(container.textContent).not.toBe('')
    const alertsElement = document.getElementById("Weather-alerts")
    expect(alertsElement.childNodes.length).toBe(1)
    expect(alertsElement.childNodes[0].childNodes.length).toBe(2)
    expect(alertsElement.childNodes[0].childNodes[0].textContent).toContain('From')
    expect(alertsElement.childNodes[0].childNodes[1].childNodes.length).toBe(4)
    expect(alertsElement.childNodes[0].childNodes[1].childNodes[0].textContent).toContain('Event')
    expect(alertsElement.childNodes[0].childNodes[1].childNodes[1].textContent).toContain('Starts')
    expect(alertsElement.childNodes[0].childNodes[1].childNodes[2].textContent).toContain('Ends')
    expect(alertsElement.childNodes[0].childNodes[1].childNodes[3].textContent).toContain('Description')

  })
})
