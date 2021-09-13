
import { weatherAPI } from './../api/api';

let SET_CITY_NAME = 'SET_CITY_NAME'
let SET_TEMP = 'SET_TEMP'
let SET_FEELS_LIKE = 'SET_FEELS_LIKE'
let SET_WIND_SPEED = 'SET_WIND_SPEED'
let SET_PRESSURE = 'SET_PRESSURE'
let SET_WEATHER = 'SET_WEATHER'
let SET_DAILY= 'SET_DAILY'
let TOGGLE_IS_LOADING= 'TOGGLE_IS_LOADING'

let initialState = {
  cityName: '',     //
  temp: 0,
  feels_like: 0,
  wind_speed: 0,
  pressure: 0,
  weather: '',
  daily: [],        //
  isLoading: false       //
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY_NAME:
      return {
        ...state,
        cityName: action.cityName,
      };
    case SET_TEMP:
      return {
        ...state,
        temp: action.temp,
      };
    case SET_FEELS_LIKE:
      return {
        ...state,
        feels_like: action.feels_like,
      };
    case SET_WIND_SPEED:
      return {
        ...state,
        wind_speed: action.wind_speed,
      };
    case SET_PRESSURE:
      return {
        ...state,
        pressure: action.pressure,
      };
    case SET_WEATHER:
      return {
        ...state,
        weather: action.weather,
      };
    case TOGGLE_IS_LOADING:
    return {
      ...state,
      isLoading: action.isLoading,
    };
    case SET_DAILY:
      return {
        ...state,
        daily: action.daily,
      };          
    default:
      return state;  
  }    
}

export const setCityName = (cityName) => ({ type: SET_CITY_NAME, cityName })
export const setTemp = (temp) => ({ type: SET_TEMP, temp })
export const setFeelsLike = (feels_like) => ({ type: SET_FEELS_LIKE, feels_like })
export const setWindSpeed = (wind_speed) => ({ type: SET_WIND_SPEED, wind_speed })
export const setPressure = (pressure) => ({ type: SET_PRESSURE, pressure })
export const setWeather = (weather) => ({ type: SET_WEATHER, weather })
export const setDaily = (daily) => ({ type: SET_DAILY, daily })
export const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading })

export const getForecast = (cityName) => {
  return (dispatch) => {
    dispatch(toggleIsLoading(true))
    weatherAPI.weeklyForecast(cityName).then((data) => {
      dispatch(toggleIsLoading(false))
      dispatch(setDaily(data.list))
      dispatch(setCityName(data.city.name))     
      dispatch(setTemp(Math.round(data.list[0].main.temp))) 
      dispatch(setFeelsLike(Math.round(data.list[0].main.feels_like))) 
      dispatch(setPressure(Math.round((data.list[0].main.pressure)*0.75))) 
      dispatch(setWindSpeed(data.list[0].wind.speed))
      dispatch(setWeather(data.list[0].weather[0].main))
    })
    .catch(() => {         
      alert('такой город не найден');      
    })
    .finally(dispatch(toggleIsLoading(false)))    
  };
};

export default reducer;