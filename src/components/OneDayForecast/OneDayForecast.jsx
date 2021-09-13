import React from "react";
import classes from "./OneDayForecast.module.css";
import rain from "../../img/rain.png";
import moment from "moment";
import snow from "../../img/snow.png";
import clear from "../../img/clear_sky_1.png";
import drizzle from "../../img/shower_rain_1.png";
import mist from "../../img/mist.png";
import thunderstorm from "../../img/groza.png";
import def from "../../img/default.png";
import clouds from "../../img/clouds_3.png";

const OneDayForecast = (props) => {
  let dayElement =
    props.forecast &&
    props.forecast.map((item, i) => {
      let imgSrc = def;

      switch (item.weather[0].main) {
        case "Rain":
          imgSrc = rain;
          break;
        case "Clouds":
          imgSrc = clouds;
          break;
        case "Snow":
          imgSrc = snow;
          break;
        case "Clear":
          imgSrc = clear;
          break;
        case "Drizzle":
          imgSrc = drizzle;
          break;
        case "Mist":
          imgSrc = mist;
          break;
        case "Thunderstorm":
          imgSrc = thunderstorm;
          break;
        default:
          imgSrc = def;
      }

      return (
        <div key={i}>
          <div>{moment(item.dt_txt).format("H")}:00</div>
          <div className={classes.img}>
            <img src={imgSrc} alt="img" />
          </div>
          <div>
            {item.main.temp > 0 ? "+" : ""}
            {Math.round(item.main.temp)}
          </div>
        </div>
      );
    });

  return (
    <div className={classes.weeklyDay}>
      <div className={classes.date}>
        {props.forecast && moment(props.forecast[0].dt_txt).format("DD.MM")}
      </div>
      {dayElement}
    </div>
  );
};

export default OneDayForecast;
