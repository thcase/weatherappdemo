/**
 * Current Weather Component
 * @licence MIT
 * @copyright 2021 T.H. Case
 * @author thcase <thcase@outlook.com>
 */

// NPM Imports
import React from 'react'

// Local Imports
import { DateHelper, TemperatureHelper, WindDegreesHelper } from '../../../helpers'

const CurrentWeather = ({ address, weather }) => {
  if (!weather) {
    return ''
  }

  const { current, lat, lon } = weather
  const offset = weather.timezone_offset
  const currentWeatherDisplay = (weather) => {
    return <div key={weather.id} className={'card'}>
      <div className={'card-header text-center'}>
        <div>
          <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={weather.main} title={weather.main}/>
        </div>
        <div>{weather.description}</div>
      </div>
    </div>
  }
  return (
    <div id={'Current-Weather'} className={'text-dark border border-dark bg-light'}>
      <h3>Current Weather for {address}</h3>
      <div>(latitude {lat}, longitude {lon})
      as of {DateHelper.formatLocalDateFromTimestamp(current.dt, offset)} {DateHelper.formatLocalTimeFromTimestamp(current.dt, offset)}</div>
      <div className={'card-group'}>
        {current.weather.map(weather => currentWeatherDisplay(weather))}
      </div>
      <div className={'card-group'}>
        <div className={'card'}>
          <div className={'card-body'}>
            <div><label>Temperature:</label> {TemperatureHelper.convertKelvinToFarenheit(current.temp)} &deg;F</div>
            <div><label>Feels Like:</label> {TemperatureHelper.convertKelvinToFarenheit(current.feels_like)} &deg;F</div>
          </div>
        </div>
        <div className={'card'}>
          <div className={'card-body'}>
            <div><label>Sunrise:</label> {DateHelper.formatLocalTimeFromTimestamp(current.sunrise, offset)}</div>
            <div><label>Sunset:</label> {DateHelper.formatLocalTimeFromTimestamp(current.sunset, offset)}</div>
          </div>
        </div>
        <div className={'card'}>
          <div className={'card-body'}>
            <div><label>Pressure:</label> {current.pressure} hPa</div>
            <div><label>Humidity:</label> {current.humidity}%</div>
            <div><label>Dew Point:</label> {current.dew_point}</div>
          </div>
        </div>
        <div className={'card'}>
          <div className={'card-body'}>
            <div><label>UV Index:</label> {current.uvi}</div>
            <div><label>Cloudiness:</label> {current.clouds}%</div>
            <div><label>Visibility:</label> {current.visibility}%</div>
          </div>
        </div>
        <div className={'card'}>
          <div className={'card-body'}>
            <div><label>Wind Speed:</label> {current.wind_speed}</div>
            <div><label>Wind Gust:</label> {current.wind_gust}%</div>
            <div><label>Wind Degrees:</label> {current.wind_deg}&deg; {WindDegreesHelper.degreesToDirection(current.wind_deg)}</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CurrentWeather
