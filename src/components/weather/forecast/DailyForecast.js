/**
 * Provides Daily Forecast Component
 * @licence MIT
 * @copyright 2021 T.H. Case
 * @author thcase <thcase@outlook.com>
 */

// NPM Imports
import React from "react"

// Local Imports
import { TemperatureHelper, DateHelper, WindDegreesHelper } from "../../../helpers"

const DailyForecast = ({ forecast, offset }) => {
  return (
    <div className={'card card-forecast'}>
      <div className={'card-header'}>
        <div>{DateHelper.formatLocalDateFromTimestamp(forecast.dt, offset)}</div>
        <div>
          <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
               alt={forecast.weather[0].main} title={forecast.weather[0].main}/>
        </div>
        <div>{forecast.weather[0].description}</div>
      </div>
      <div className={'card-body card-body-long'}>
        <div><label>Morn Temp:</label> {TemperatureHelper.convertKelvinToFarenheit(forecast.temp.morn)} &deg;F</div>
        <div><label>Day Temp:</label> {TemperatureHelper.convertKelvinToFarenheit(forecast.temp.day)} &deg;F</div>
        <div><label>Eve Temp:</label> {TemperatureHelper.convertKelvinToFarenheit(forecast.temp.eve)} &deg;F</div>
        <div><label>Night Temp:</label> {TemperatureHelper.convertKelvinToFarenheit(forecast.temp.night)} &deg;F</div>
        <div><label>Low Temp:</label> {TemperatureHelper.convertKelvinToFarenheit(forecast.temp.min)} &deg;F</div>
        <div><label>High Temp:</label> {TemperatureHelper.convertKelvinToFarenheit(forecast.temp.max)} &deg;F</div>
        <div><label>Morn Feels Like:</label> {TemperatureHelper.convertKelvinToFarenheit(forecast.feels_like.morn)} &deg;F</div>
        <div><label>Day Feels Like:</label> {TemperatureHelper.convertKelvinToFarenheit(forecast.feels_like.day)} &deg;F</div>
        <div><label>Eve Feels Like:</label> {TemperatureHelper.convertKelvinToFarenheit(forecast.feels_like.eve)} &deg;F</div>
        <div><label>Night Feels Like:</label> {TemperatureHelper.convertKelvinToFarenheit(forecast.feels_like.night)} &deg;F</div>
        <div><label>Pressure:</label> {forecast.pressure} hPa</div>
        <div><label>Humidity:</label> {forecast.humidity}%</div>
        <div><label>Dew Point:</label> {forecast.dew_point}</div>
        <div><label>UV Index:</label> {forecast.uvi}</div>
        <div><label>Cloudiness:</label> {forecast.clouds}%</div>
        <div><label>Wind Speed:</label> {forecast.wind_speed}</div>
        <div><label>Wind Gust:</label> {forecast.wind_gust}</div>
        <div><label>Wind Degrees:</label> {forecast.wind_deg}&deg; {WindDegreesHelper.degreesToDirection(forecast.wind_deg)}</div>
        {(forecast.pop !== undefined) && <div><label>Chance of Precip:</label> {forecast.pop}%</div>}
        {(forecast.rain !== undefined) && <div><label>Rain:</label> {forecast.rain}</div>}
        {(forecast.snow !== undefined) && <div><label>Snow:</label> {forecast.snow}</div>}
      </div>
    </div>
  )
}

export default DailyForecast
