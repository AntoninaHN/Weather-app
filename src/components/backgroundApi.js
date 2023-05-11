import axios from "axios";

const searchImages = async (city) => {
  const options = await axios.get(`http://localhost:8000/image?city=${city}`);
  return options.data.results;
};

export default searchImages;
