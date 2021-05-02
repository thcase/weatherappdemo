/**
 * Weather Forecast Component
 * @licence MIT
 * @copyright 2021 T.H. Case
 * @author thcase <thcase@outlook.com>
 */

// NPM Imports
import React from 'react'

// Local Imports
import HourlyForecast from "./HourlyForecast"
import DailyForecast from "./DailyForecast"

// Component
const WeatherForecast = ({ weather }) => {
  if (!weather) {
    return ''
  }
  const offset = weather.timezone_offset
  const hourlyForecast = weather.hourly
  const dailyForecast = weather.daily

  return (
    <div id={'weather-forecast'} className="mt-3 border border-dark bg-light">
      <h3>Weather Forecast</h3>
      <nav>
        <div id={'weather-forecast-tabs'} className={'nav nav-tabs'} role={'tablist'}>
          <button className={'nav-link active'} id={'hourly-tab'}
                  data-bs-toggle={'tab'} data-bs-target={'#hourly-forecast'}
                  type={'button'} role={'tab'}
                  aria-controls="hourly-forecast" aria-selected="true">Hourly Forecast
          </button>
          <button className={'nav-link'} id={'daily-tab'}
                  data-bs-toggle={'tab'} data-bs-target={'#daily-forecast'}
                  type={'button'} role={'tab'}
                  aria-controls="daily-forecast" aria-selected="false">Daily Forecast
          </button>
        </div>
      </nav>
      <div className={'tab-content'} id={'weather-forecast-tab-content'}>
        <div className="tab-pane fade show active card-forecast-group" id="hourly-forecast"
             role="tabpanel" aria-labelledby="hourly-tab">
          {hourlyForecast.map((forecast, index) => <HourlyForecast key={index} forecast={forecast}
                                                                   offset={offset}></HourlyForecast>)}
        </div>
        <div className="tab-pane fade card-forecast-group" id="daily-forecast"
             role="tabpanel" aria-labelledby="daily-tab">
          {dailyForecast.map((forecast, index) => <DailyForecast key={index} forecast={forecast}
                                                                 offset={offset}></DailyForecast>)}
        </div>
      </div>
    </div>
  )
}

export default WeatherForecast
