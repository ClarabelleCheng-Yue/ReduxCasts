import axios from 'axios';
const API_KEY = '609dc4bd882d0bc17701a7143c0dedee';
const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// action creators:
export function fetchWeather(city) {
  // search query
  const url = `${ROOT_URL}&q=${city},us`;
  // make a get request on the url, returns a promise
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}