import axios from "axios";
const IMG_KEY = process.env.REACT_APP_IMG_KEY;

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
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
