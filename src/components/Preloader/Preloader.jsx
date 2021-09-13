import React from 'react';
import weatherPreloader from '../../img/weatherPreloader.gif'
import classes from './Preloader.module.css'

const Preloader = () => {
  return (
    <div className={classes.preloader}>
      <img src={weatherPreloader} alt='gif'/>
    </div>
  );
}

export default Preloader;
