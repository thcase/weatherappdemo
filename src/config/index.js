/**
 * Provides Config file that reads variables from environment
 * @licence MIT
 * @copyright 2021 T.H. Case
 * @author thcase <thcase@outlook.com>
 */

// Config Property
const Config = {
  geoLocationServiceApiKey: process.env.GOOGLE_MAP_API_KEY || '',
  weatherApiKey: process.env.WEATHER_API_KEY || '',
}

// Export Defaults
module.exports = Config
