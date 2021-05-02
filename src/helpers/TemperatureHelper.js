/**
 * Helper Library for Temperature
 * @licence MIT
 * @copyright 2021 T.H. Case
 * @author thcase <thcase@outlook.com>
 */

// NPM Imports
import roundTo from 'round-to'

const convertKelvinToFarenheit = (deg) => {
  return roundTo(deg * 9 / 5 - 459.67, 1);
}

const TemperatureHelper = {
  convertKelvinToFarenheit
}

export default TemperatureHelper
