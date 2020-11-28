import { useState, useEffect } from "react";

export const usePosition = () => {
    const [position, setPosition] = useState({});
    const [error, setError] = useState(null);

    const onChange = ({ coords }) => {
        setPosition({
            latitude: coords.latitude,
            longitude: coords.longitude,
        });
    };

    const onError = (error) => {
        setError(error.message);
    };

    useEffect(() => {
        if (!navigator || !navigator.geolocation) {
            setError("Geolocation is not supported");
            return;
        }

        navigator.geolocation.getCurrentPosition(onChange, onError);

        //return () => navigator.geolocation.clearWatch(watcher);
    }, []);

    return { ...position, error };
};
