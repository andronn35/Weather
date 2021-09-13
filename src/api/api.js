import axios from "axios";


const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/'
})

let APIKey = '59384ec4e582eeadd03e1c3aa43e2009'

export const weatherAPI = {
  getCity(cityName) {
    return instance.get(`weather?q=${cityName}&lang=ru&appid=${APIKey}`)
    .then(response => response.data)
  },
  getForecast(lat, lon) {
    return instance.get(`onecall?lat=${lat}.44&lon=${lon}.04&units=metric&appid=${APIKey}`)
    .then(response => response.data)
  },
  weeklyForecast(cityName) {
    return instance.get(`forecast?q=${cityName}&lang=ru&units=metric&appid=471fb871540b1cabfd3ed0bce031cb0d`)
    .then(response => response.data)
    
  }
}
