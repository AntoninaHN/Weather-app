import { useState, useEffect } from "react";
import WeatherShow from "./WeatherShow";
import "./WeatherList.css";
import moment from "moment";

const WeatherList = ({ cities }) => {
  const convertTime = (time, timezone) => {
    const sunriseSunset = moment
      .unix(time)
      .utc()
      .add(timezone, "s")
      .format(" HH:mm")
      .toLocaleString();

    return sunriseSunset;
  };

  const dt = cities.dt;
  const timezone = cities.timezone;

  const [date, setTime] = useState(
    moment.unix(dt).add(timezone, "s").format(" HH:mm").toLocaleString()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(
        moment()
          .utcOffset(timezone / 60)
          .format("DD.MM HH:mm:ss")
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, [date, timezone]);

  return (
    <div key={cities.id}>
      <h1 className="title">{cities.name}</h1>
      <p className="clock">{date}</p>
      <ul className="weather-list">
        <li className="weather-item">
          {" "}
          Temperature: {Math.floor(cities.main.temp)} °C
        </li>
        <li className="weather-item">
          {" "}
          Feels like: {Math.floor(cities.main.feels_like)} °C{" "}
        </li>
        <li className="weather-item">
          {" "}
          Wind: {Math.floor(cities.wind.speed)} km/h
        </li>

        <li className="weather-item">
          Sunrise: {convertTime(cities.sys.sunrise, cities.timezone)} h
        </li>
        <li className="weather-item">
          {" "}
          Sunset: {convertTime(cities.sys.sunset, cities.timezone)} h
        </li>
        <li className="weather-item">
          <WeatherShow key={cities.weather.id} cities={cities} />
        </li>
      </ul>
    </div>
  );
};

export default WeatherList;
