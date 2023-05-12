import axios from "axios";

const searchImages = async (city) => {
  const options = await axios.get(
    `https://weather-app-suqh.onrender.com/image?city=${city}`
  );
  return options.data.results;
};

export default searchImages;
