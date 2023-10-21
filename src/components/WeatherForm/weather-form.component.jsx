import React, { useState, useEffect } from "react";

import WeatherService from '../WeatherService/weather-service.component';

import './weather-form.styles.scss';

const WeatherForm = () => {
    const [city, setCity] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true); // When user submites this becomes TRUE
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

            {/* Render WeatherService only when the user submitted the form*/}
            {submitted && <WeatherService city={city} />}
        </div>
    )
}

export default WeatherForm;