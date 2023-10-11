import React, { useState } from "react";

import WeatherService from '../WeatherService/weather-service.component';
import WeatherDisplay from '../WeatherDisplay/weather-display.component';

import './weather-form.styles.scss';

const WeatherForm = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('The city typed is:', city);
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

            {/* Render WeatherService as a component and pass the 'city' prop */}
            <WeatherService city={city} />

            {/* Pass weatherdata to WeatherDisplay */}
            { weatherData && <WeatherDisplay  weatherData={weatherData}/> }
        </div>
    )
}

export default WeatherForm;