import axios from "axios";

const SearchWeather = async (city) => {
  // const weather = await axios.get(`http://localhost:8000/weather?city=${city}`);
  const weather = await axios.get(
    `https://weather-app-suqh.onrender.com/weather?city=${city}`
  );

  return weather.data;
};

export default SearchWeather;
