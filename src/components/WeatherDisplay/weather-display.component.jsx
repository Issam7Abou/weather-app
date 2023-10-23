import React from "react";

import { useDataContext } from '../../DataContext/DataContext';

import { useButtonContext } from "../../DataContext/ButtonContext";

import './weather-display.styles.scss';

const WeatherDisplay = () => {
    const { setButtonActive } = useButtonContext();
    const { weatherData } = useDataContext();

    const handleButtonClick = () => {
            setButtonActive(true);  
    }

    // Construct the full Link to Icon Weather
    const iconUrl = `https:${weatherData.current.condition.icon}`

    // Logic to separate the date from API and use it to switch beetwen day and night
    const fullLocalTime = weatherData.location.localtime;
    const localTime = fullLocalTime.slice(-5);
    const localTimeParts = localTime.split(':');
    const localHour = parseInt(localTimeParts[0], 10);
    const isNight = localHour >= 19 || localHour < 6;  // See if based on localTime is night or day;
    const containerClass = `weatherDisplay-container ${isNight ? 'night' : 'day'}`; // Add the "day" or "night" class conditionally

    return (
        <div className={containerClass}>
            <h1>{weatherData.location.region}</h1>
            <h3>{weatherData.location.country}</h3>
            <img src={iconUrl} alt="weather icon"></img>
            <h2>{weatherData.current.temp_c}º</h2>
            <h3>"{weatherData.current.condition.text}"</h3>
            <div className="additional-info">
                <p>Local Time: {localTime}h</p>
                <p>Humidity: {weatherData.current.humidity}%</p>
                <p>Wind Speed: {weatherData.current.wind_kph} KPH</p>
                <p>Wind Gust: {weatherData.current.gust_kph} KPH</p>
            </div>
            <button onClick={handleButtonClick} className="return-btn">HOME</button>
        </div>
    )
}

export default WeatherDisplay;