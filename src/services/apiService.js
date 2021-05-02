/**
 * Provides API Service for Client
 * @licence MIT
 * @copyright 2021 T.H. Case
 * @author thcase <thcase@outlook.com>
 */

// NPM Imports
import axios from "axios";

const fetchLocation = (address) => {
    const url = `/api/getGeoLocation/${address}`;
    return axios.get(url,{ crossdomain: true });
}

const fetchWeather = (lat, lng) => {
    const url = `/api/weather/${lat}/${lng}`;
    return axios.get(url,{ crossdomain: true });
}

const ApiService = {
  fetchLocation,
  fetchWeather
}

export default ApiService
