import React from "react";

import { useDataContext } from '../../DataContext/DataContext';

import './weather-display.styles.scss';

const WeatherDisplay = () => {
    const { weatherData } = useDataContext();
    const iconUrl = `https:${weatherData.current.condition.icon}`

    return (
        <div className="weatherDisplay-container">
            <h1>{weatherData.location.region}</h1>
            <h3>{weatherData.location.country}</h3>
            <img src={iconUrl} alt="weather icon"></img>
            <h2>{weatherData.current.temp_c}º</h2>
            <h3>"{weatherData.current.condition.text}"</h3>
            <div className="additional-info">
                <p>Humidity: {weatherData.current.humidity}%</p>
                <p>Wind Speed: {weatherData.current.wind_kph} KPH</p>
                <p>Wind Gust: {weatherData.current.gust_kph} KPH</p>
            </div>
        </div>
    )
}

export default WeatherDisplay;