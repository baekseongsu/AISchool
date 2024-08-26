import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const WeatherPage = () => {
  const [weather, setWeather] = useState(null);

  const getCurrentWeather = async () => {
    let cityName = "Gwangju";
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    let weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    const res = await axios.get(weather_url);
    const data = res.data;

    // API 호출 응답결과를 state에 저장
    setWeather(data);

    console.log("응답결과:", res);
    console.log("날씨정보:", data);
  };

  // 처음 렌더링했을 때 API 호출
  useEffect(() => {
    getCurrentWeather();
  }, []);

  return (
    <div>
      <h1>WeatherPage</h1>
      <div>
        <p>도시: {weather?.name}</p>
        <p>온도: {weather?.main.temp}</p>
        <p>날씨상태: {weather?.weather[0].description}</p>
        <p>
          <img
            src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
            alt="날씨이미지"
          />
        </p>
        {/* react에서 ?의미는 있으면 접근하고 없으면 아무것도 접근하지 않는 것 */}
      </div>
    </div>
  );
};

export default WeatherPage;
