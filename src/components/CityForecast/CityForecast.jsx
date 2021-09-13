import React from 'react';
import DayWeather from '../DayWeather/DayWeather';
import classes from './CityForecast.module.css'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import OneDayForecast from '../OneDayForecast/OneDayForecast';
import moment from 'moment';
import Preloader from './../Preloader/Preloader';

const CityForecast = () => {

  const daily = useSelector(state => state.reducer.daily)
  const isLoading = useSelector(state => state.reducer.isLoading)

  let oneDay = daily.length > 0 && daily.filter(item => moment(item.dt_txt).format('LL') === moment(daily[7].dt_txt).format('LL'))
  let oneDayResult = oneDay.length > 0 && oneDay.filter((e,i)=>!(i%2))

  let twoDay = daily.length > 0 && daily.filter(item => moment(item.dt_txt).format('LL') === moment(daily[15].dt_txt).format('LL'))
  let twoDayResult = twoDay.length > 0 && twoDay.filter((e,i)=>!(i%2))

  let threeDay = daily.length > 0 && daily.filter(item => moment(item.dt_txt).format('LL') === moment(daily[23].dt_txt).format('LL'))
  let threeDayResult = threeDay.length > 0 && threeDay.filter((e,i)=>!(i%2))

  let fourDay = daily.length > 0 && daily.filter(item => moment(item.dt_txt).format('LL') === moment(daily[31].dt_txt).format('LL'))
  let fourDayResult = fourDay.length > 0 && fourDay.filter((e,i)=>!(i%2))
  
  return (
    <div>
      {isLoading ? <Preloader /> : <div className={classes.cityForecast}><div className={classes.DayWeatherContainer}>
        <DayWeather />
      </div>
      <OneDayForecast forecast = {oneDayResult}/>
      <OneDayForecast forecast = {twoDayResult}/>
      <OneDayForecast forecast = {threeDayResult}/>
      <OneDayForecast forecast = {fourDayResult}/>
      
      <div className={classes.back}><NavLink to='/'>Вернуться к выбору города</NavLink></div></div>} 
      
    </div> 
      
    
  );
}

export default CityForecast;
