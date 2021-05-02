/**
 * Provides Weather Alert Component
 * @licence MIT
 * @copyright 2021 T.H. Case
 * @author thcase <thcase@outlook.com>
 */

// NPM Imports
import React from 'react'

// Local Imports
import DateHelper from "../../../helpers/DateHelper"

const WeatherAlerts = ({ weather }) => {
  const alerts = weather && weather.alerts ? weather.alerts :  []
  // If no alerts, return empty string
  if (!alerts || alerts.length === 0) {
    return ``
  }
  const offset = weather.timezone_offset
  // Format alert for display
  const displayAlert = (alert, index) => {
    return <div key={index} className={'card weather-alerts'}>
      <div className={'card-header'}>
        <label>From:</label> {alert.sender_name}
      </div>
      <div className={'card-body'}>
        <div><label>Event:</label> {alert.event}</div>
        <div><label>Starts:</label> {DateHelper.formatLocalTimeFromTimestamp(alert.start,offset)} ({DateHelper.formatDateFromUtcTimestamp(alert.start, offset)})</div>
        <div><label>Ends:</label> {DateHelper.formatLocalTimeFromTimestamp(alert.end,offset)} ({DateHelper.formatDateFromUtcTimestamp(alert.end, offset)})</div>
        <div><label>Description:</label> {alert.description}</div>
      </div>
    </div>
  }

  // Return Alerts
  return (
    <div className={'bg-light text-dark mt-4'}>
      <h3>Weather Alerts</h3>
      <div id="weather-alerts" className={'card-group text-left'}>
        {alerts.map((alert, index) => displayAlert(alert, index))}
      </div>
    </div>
  )
}

export default WeatherAlerts
