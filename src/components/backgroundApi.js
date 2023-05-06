import axios from "axios";
require("dotenv").config();
const IMG_KEY = process.env.IMG_KEY;
const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com//search/photos", {
    headers: {
      Authorization: IMG_KEY,
    },
    params: {
      query: term,
      per_page: 1,
    },
  });
  return response.data.results;
};

export default searchImages;
