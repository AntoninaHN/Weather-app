import "./App.css";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchWeather from "./components/api";
import searchImages from "./components/backgroundApi";
import WeatherList from "./components/WeatherList";
import Wrapper from "./components/Wrapper";

function App() {
  const [images, setImages] = useState([]);
  const [cities, setCities] = useState({});
  const handleSubmit = async (city) => {
    const result = await SearchWeather(city);
    setCities(result);
    const imageResult = await searchImages(city);
    setImages(imageResult);
  };

  let checkObject = Object.keys(cities).length === 0;
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <Wrapper onSubmit={handleSubmit} images={images}>
        {!checkObject ? (
          <WeatherList cities={cities} />
        ) : (
          <h1 className="title-type-city">Type a city</h1>
        )}
      </Wrapper>
    </div>
  );
}
export default App;
