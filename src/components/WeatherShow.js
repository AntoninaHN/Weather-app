function WeatherShow({ cities }) {
  return (
    <div>
      {cities.weather.map((item) => {
        const icon = cities.weather[0].icon;
        return (
          <div key={item.id}>
            <img
              src={`http://openweathermap.org/img/w/${icon}.png`}
              alt=""
              width="30"
            />
            <span>{item.main}</span>
          </div>
        );
      })}
    </div>
  );
}
export default WeatherShow;
