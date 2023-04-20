import axios from "axios";

const SearchWeather = async (city) => {
  const weather = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e2a6f2e3a9b980f48fe60d6da84b9323&units=metric`
  );
  return weather.data;
};

export default SearchWeather;
