import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com//search/photos", {
    headers: {
      Authorization: "Client-ID 53ITIbQ5eC1vpbS4EeOwkPj2OaAelqEZgP_lXJm7jxE",
    },
    params: {
      query: term,
      per_page: 1,
    },
  });
  return response.data.results;
};

export default searchImages;
