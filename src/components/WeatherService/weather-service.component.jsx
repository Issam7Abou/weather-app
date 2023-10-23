import { useEffect } from 'react';

import { useDataContext } from '../../DataContext/DataContext';

const WeatherService = ({ city }) => {
  const { setWeatherData } = useDataContext(); // Access setWeatherData from the context

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (city) {
        const apiKey = '';
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          setWeatherData(data); // Set data in the context
        } catch (error) {
        }
      }
    };

    fetchWeatherData();
  }, [city, setWeatherData]);

  return null;
};

export default WeatherService;
