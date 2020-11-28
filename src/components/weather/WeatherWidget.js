import React, { useState } from "react";
import { iconMap } from "./WeatherUtil";
import pin from "../../assets/weather/icons/Pin_icon.png";
import { useGeoWeatherApi } from "./useGeoWeatherApi";
import StyledWeatherWrapper from "./StyledWeatherWrapper";
import StyledCurrentWeather from "./StyledCurrentWeather";
import StyledForecastWeather from "./StyledForecastWeather";
import StyledWeatherIcon from "./StyledWeatherIcon";
import StyledWeatherCardIcon from "./StyledWeatherCardIcon";
import StyledWeatherCard from "./StyledWeatherCard";
import StyledFlipCard from "./StyledFlipCard";
import StyledFlipCardInner from "./StyledFlipCardInner";
import StyledFlipCardFront from "./StyledFlipCardFront";
import StyledFlipCardBack from "./StyledFlipCardBack";
import StyledWeatherInfoDetail from "./StyledWeatherInfoDetail";
import StyledCurrentTemp from "./StyledCurrentTemp";
import StyledCurrentTitle from "./StyledCurrentTitle";
import { Map } from "./Map";

const WeatherWidget = () => {
    const apiKey = "fe535f59ef554e82bea9249ddc2fa648";
    const baseUrl = "https://api.weatherbit.io/v2.0";

    const { coords, current, forecast, error } = useGeoWeatherApi(
        baseUrl,
        apiKey
    );
    const [flipCard, setFlipCard] = useState(false);
    const [selectedForecast, setSelectedForecast] = useState(false);

    const handleClick = () => {
        setFlipCard(!flipCard);
    };

    const handleHover = (d) => {
        setSelectedForecast(d);
    };

    return !error ? (
        <StyledFlipCard onClick={handleClick}>
            <StyledFlipCardInner flipped={flipCard}>
                <StyledFlipCardFront>
                    <StyledWeatherWrapper>
                        <StyledCurrentWeather>
                            {current && current.data && current.data[0] ? (
                                <React.Fragment>
                                    <StyledCurrentTitle>
                                        <img src={pin} alt="location pin" />
                                        <span>{current.data[0].city_name}</span>
                                    </StyledCurrentTitle>
                                    <StyledWeatherIcon
                                        src={`src/assets/weather/icons/${
                                            iconMap[
                                                current.data[0].weather.code
                                            ]
                                        }.svg`}
                                        alt={
                                            current.data[0].weather.description
                                        }
                                    />
                                    <StyledCurrentTemp>
                                        {Math.round(current.data[0].temp)}°
                                    </StyledCurrentTemp>

                                    <StyledWeatherInfoDetail>
                                        {current.data[0].weather.description}
                                    </StyledWeatherInfoDetail>
                                    <StyledWeatherInfoDetail>
                                        Wind:{" "}
                                        {Math.round(
                                            current.data[0].wind_spd * 2.237
                                        )}{" "}
                                        MPH
                                    </StyledWeatherInfoDetail>
                                    <StyledWeatherInfoDetail>
                                        Feels like:{" "}
                                        {Math.round(current.data[0].app_temp)}°
                                    </StyledWeatherInfoDetail>
                                    <StyledWeatherInfoDetail>
                                        Humidity:{" "}
                                        {Math.round(current.data[0].rh)}%
                                    </StyledWeatherInfoDetail>
                                </React.Fragment>
                            ) : (
                                "loading position"
                            )}
                        </StyledCurrentWeather>
                        <hr />
                        <StyledForecastWeather>
                            {forecast && forecast.data
                                ? forecast.data.slice(0, 7).map((d) => {
                                      const date = new Date(d.datetime);

                                      const dayName = date.toLocaleString(
                                          "default",
                                          {
                                              weekday: "short",
                                          }
                                      );

                                      return (
                                          <StyledWeatherCard
                                              key={d.datetime}
                                              onMouseEnter={() => {
                                                  handleHover(d.datetime);
                                              }}
                                              selected={
                                                  selectedForecast ===
                                                  d.datetime
                                              }>
                                              <div className="forecast-title">
                                                  {dayName} {date.getDate()}
                                              </div>
                                              <div className="forecast-icon-wrapper">
                                                  <StyledWeatherCardIcon
                                                      src={`src/assets/weather/icons/${
                                                          iconMap[
                                                              d.weather.code
                                                          ]
                                                      }.svg`}
                                                      className={
                                                          iconMap[
                                                              d.weather.code
                                                          ]
                                                      }
                                                      alt={
                                                          d.weather.description
                                                      }
                                                  />
                                              </div>
                                              <div className="forecast-min-max">
                                                  {Math.round(d.app_max_temp)}°{" "}
                                                  {Math.round(d.app_min_temp)}°
                                              </div>
                                          </StyledWeatherCard>
                                      );
                                  })
                                : "loading forecast"}
                        </StyledForecastWeather>
                    </StyledWeatherWrapper>
                </StyledFlipCardFront>
                <StyledFlipCardBack>
                    <Map coords={coords} />
                </StyledFlipCardBack>
            </StyledFlipCardInner>
        </StyledFlipCard>
    ) : (
        error
    );
};

export default WeatherWidget;

export const MemoizedStyledWeatherCard = React.memo(StyledWeatherCard);
export const MemoizedWeatherWidget = React.memo(WeatherWidget);
