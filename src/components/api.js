import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const SearchWeather = async (city) => {
  const weather = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  return weather.data;
};
console.log(process.env.API_KEY);

export default SearchWeather;
