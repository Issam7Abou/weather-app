import React, { useState } from "react";

import WeatherService from '../WeatherService/weather-service.component';

import { useSubmittedContext } from "../../DataContext/SubmittedContext";
import { useButtonContext } from "../../DataContext/ButtonContext";

import './weather-form.styles.scss';

const WeatherForm = () => {
    const [city, setCity] = useState('');
    const {isSubmitted, setIsSubmitted} = useSubmittedContext();
    const { setButtonActive } = useButtonContext();

    const handleSubmit = async (e) => {
        e.preventDefault();

        //
        if (city.trim() !== '') {
            setIsSubmitted(true); // When user submites this becomes TRUE
            setButtonActive(false);
        } else {
            alert('Please enter a valid City')
        }
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
            {isSubmitted && <WeatherService city={city} />}
        </div>
    )
}

export default WeatherForm;