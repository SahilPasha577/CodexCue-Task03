import React, { useState } from 'react';
import './Weather.css';

export const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const fetchWeather = async () => {
        try {
            const response = await fetch(`https://goweather.herokuapp.com/weather/${city}`);
            if (!response.ok) throw new Error('City not found');
            const data = await response.json();
            setWeather(data);
            setError('');
        } catch (err) {
            setWeather(null);
            setError(err.message);
        }
    };

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather();
    };

    return (
        <div className="weather-container">
            <h1>Weather Checker</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={handleInputChange}
                />
                <button type="submit">Check Weather</button>
            </form>
            {error && <p className="error">{error}</p>}
            {weather && (
                <div className="weather-info">
                    <h2>{city}</h2>
                    <p>{weather.description}</p>
                    <p>Temperature: {weather.temperature}</p>
                    <p>Wind: {weather.wind}</p>
                </div>
            )}
        </div>
    );
};


