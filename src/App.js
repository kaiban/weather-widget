import React, { Component } from "react";
import WeatherWidget from "./components/weather/WeatherWidget";

class App extends Component {
    render() {
        return (
            <div className="App">
                <WeatherWidget />
            </div>
        );
    }
}

export default App;
