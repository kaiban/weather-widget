import { useState, useEffect } from "react";

export const useGeoWeatherApi = (baseUrl, apiKey) => {
    const [current, setCurrent] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [error, setError] = useState(null);
    const [coords, setCoords] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const {
                    coords: { latitude, longitude },
                } = await getCurrentPosition();
                const current = await fetch(
                    `${baseUrl}/current?lang=en&lat=${latitude}&lon=${longitude}&key=${apiKey}`
                );
                const currentData = await current.json();

                const forecast = await fetch(
                    `${baseUrl}/forecast/daily?lang=en&lat=${latitude}&lon=${longitude}&key=${apiKey}`
                );
                const forecastData = await forecast.json();

                setCurrent(currentData);
                setForecast(forecastData);
                setCoords({ latitude, longitude });
                setError(null);
            } catch (e) {
                console.error(e);
                setError(
                    `${JSON.stringify({ name: e.name, message: e.message })}`
                );
            }
        }
        fetchData();
    }, []);
    return { coords, current, forecast, error };
};

const getCurrentPosition = (options = {}) => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};
