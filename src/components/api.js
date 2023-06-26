import axios from "axios";

const SearchWeather = async (city) => {
  const weather = await axios.get(`http://localhost:8000/weather?city=${city}`);

  return weather.data;
};

export default SearchWeather;
