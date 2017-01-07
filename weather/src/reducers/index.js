import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  // array from payload data reducer weather
  weather: WeatherReducer
});

export default rootReducer;
