import React, { useState } from "react";

import WeatherService from './WeatherService';
import WeatherDisplay from './WeatherDisplay';

import './weather-form.styles.scss';

const WeatherForm = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('The city typed is:', city);

        // Call WeatherService component to fetch data
        const data = await WeatherService.fetchWeatherData(city);

        // Set the fetch data result in state
        setWeatherData(data);
    }

    return (
        <div className="form-container">
            <h1>Weather App</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter a location" 
                />
                <button type="submit">Get Weather</button>
            </form>
        </div>
    )
}

export default WeatherForm;