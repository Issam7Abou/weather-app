import React, { useEffect, useState } from 'react';
import { useDataContext } from '../../DataContext/DataContext';

const WeatherService = ({ city }) => {
  const { setWeatherData } = useDataContext(); // Access setWeatherData from the context

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (city) {
        const apiKey = '84271be46b5f45c89e0215008230410';
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          // Log the data to verify it's fetched correctly
          console.log(data);
          setWeatherData(data); // Set data in the context
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