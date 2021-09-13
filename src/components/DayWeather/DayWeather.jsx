import React from 'react';
import { useSelector } from 'react-redux';
import classes from './DayWeather.module.css'
import shower_rain_1 from '../../img/rain.png'
import snow from '../../img/snow.png'
import clear from '../../img/clear_sky_1.png'
import drizzle from '../../img/shower_rain_1.png'
import mist from '../../img/mist.png'
import thunderstorm from '../../img/groza.png'
import def from '../../img/default.png'
import clouds from '../../img/clouds_3.png'

const DayWeather = () => {

  const temp = useSelector(state => state.reducer.temp);
  const feels_like = useSelector(state => state.reducer.feels_like);
  const wind_speed = useSelector(state => state.reducer.wind_speed);
  const pressure = useSelector(state => state.reducer.pressure);
  const weather = useSelector(state => state.reducer.weather);  
  const cityName = useSelector(state => state.reducer.cityName);  

  let bgImg = `url(${shower_rain_1})`

  switch(weather) {
    case 'Rain': bgImg = `url(${shower_rain_1})`;
      break;
    case 'Clouds': bgImg = `url(${clouds})`;
      break;
    case 'Snow': bgImg = `url(${snow})`;  
      break;
    case 'Clear': bgImg = `url(${clear})`; 
      break;
    case 'Drizzle': bgImg = `url(${drizzle})`; 
      break;  
    case 'Mist': bgImg = `url(${mist})`; 
      break;
    case 'Thunderstorm': bgImg = `url(${thunderstorm})`; 
      break;
    default: bgImg = `url(${def})`;
  }

  const styles = {
    backgroundImage: bgImg
  }

  return (
    <div className={classes.dayWeather}>
      <div className={classes.bigTemp} style={styles}>        
        {temp > 0 ? '+' + temp : temp}
      </div>
      <div className={classes.details}>
        <div>Ощущается как {feels_like > 0 ? '+' + feels_like : feels_like}</div>
        <div>Ветер {wind_speed} м/с</div>
        <div>Давление {pressure} мм.рт.ст</div>
        <div className={classes.cityName}>{cityName}</div>
      </div>
    </div>
  );
}

export default DayWeather;
