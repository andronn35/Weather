import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classes from './MainPage.module.css'
import { getForecast } from './../../redux/reducer';

const MainPage = () => {

  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  let onInputCange = (e) => {
    setInputValue(e.target.value)
  }

  let onButtonClick = () => {
    dispatch(getForecast(inputValue))
  }

  return (
    <div className={classes.mainPage}> 
      <div className={classes.title}>Прогноз погоды</div>           
      <input type='text' placeholder='Город' onChange={onInputCange}/>      
      <NavLink to={'/city/'}>
        <div className={classes.button}>        
          <div onClick={onButtonClick}>поиск</div>        
        </div>
      </NavLink>
    </div>
  );
}

export default MainPage;
