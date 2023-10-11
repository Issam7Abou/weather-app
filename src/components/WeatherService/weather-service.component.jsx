import React, { useEffect, useState } from "react";

const WeatherService = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (city) {
            const apiKey = '84271be46b5f45c89e0215008230410';
            const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

            try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setWeatherData(data);
            console.log(data);
            } catch (error) {
            console.log('Error fetching weather data:', error);
            }
        }
    };

    fetchWeatherData();
  }, [city]);

  return null;
};

export default WeatherService;
