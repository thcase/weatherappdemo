/**
 * Provides Hourly Forecast Component
 * @licence MIT
 * @copyright 2021 T.H. Case
 * @author thcase <thcase@outlook.com>
 */

// NPM Imports
import React from "react"

// Local Imports
import { TemperatureHelper, DateHelper, WindDegreesHelper } from "../../../helpers"

const HourlyForecast = ({ forecast, offset }) => {
  return (
    <div className={'card card-forecast'}>
      <div className={'card-header'}>
        <div>{DateHelper.formatLocalTimeFromTimestamp(forecast.dt, offset)}</div>
        <div>
          <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
               alt={forecast.weather[0].main} title={forecast.weather[0].main}/>
        </div>
        <div>{forecast.weather[0].description}</div>
      </div>
      <div className={'card-body'}>
        <div><label>Temp:</label> {TemperatureHelper.convertKelvinToFarenheit(forecast.temp)} &deg;F</div>
        <div><label>Feels Like:</label> {TemperatureHelper.convertKelvinToFarenheit(forecast.feels_like)} &deg;F</div>
        <div><label>Pressure:</label> {forecast.pressure} hPa</div>
        <div><label>Humidity:</label> {forecast.humidity}%</div>
        <div><label>Dew Point:</label> {TemperatureHelper.convertKelvinToFarenheit(forecast.dew_point)} &deg;F</div>
        <div><label>UV Index:</label> {forecast.uvi}</div>
        <div><label>Cloudiness:</label> {forecast.clouds}%</div>
        <div><label>Visibility:</label> {forecast.visibility} meters</div>
        <div><label>Wind Speed:</label> {forecast.wind_speed} m/s</div>
        <div><label>Wind Gust:</label> {forecast.wind_gust}</div>
        <div><label>Wind Degrees:</label> {forecast.wind_deg}&deg; {WindDegreesHelper.degreesToDirection(forecast.wind_deg)}</div>
        {(forecast.pop !== undefined) && <div><label>Chance of Precip:</label> {forecast.pop}%</div>}

        {(forecast.rain && forecast.rain['1h']) && <div><label>Rain (1h):</label> {forecast.rain['1h']}</div>}
        {(forecast.snow && forecast.snow['1h']) && <div><label>Snow (1h):</label> {forecast.snow['1h']}</div>}
      </div>
    </div>
  )
}

// Export default
export default HourlyForecast
