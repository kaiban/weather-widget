import React from "react";
import DeckGL from "@deck.gl/react";
import { IconLayer } from "@deck.gl/layers";
import { StaticMap } from "react-map-gl";
import pin from "../../assets/weather/icons/Pin_icon.png";

export const Map = ({ coords }) => {
    const MAPBOX_ACCESS_TOKEN =
        "pk.eyJ1IjoiYXlleWUiLCJhIjoiY2tpMHp1aG51MDRqMjJwcW5sMmRud3I5YSJ9.EdVDt6a1-WpBM18H1qwwDA";

    const INITIAL_VIEW_STATE = {
        longitude: coords && coords.longitude ? coords.longitude : 0,
        latitude: coords && coords.latitude ? coords.latitude : 0,
        zoom: 13,
        pitch: 0,
        bearing: 0,
    };

    const layers = new IconLayer({
        id: "icon-layer",
        data: [
            {
                position: [
                    coords && coords.longitude ? coords.longitude : 0,
                    coords && coords.latitude ? coords.latitude : 0,
                ],
                color: "#d0793d",
                radius: 1000,
            },
        ],
        pickable: true,

        getIcon: (d) => ({
            url: pin ? pin : "",
            width: 17,
            height: 23,
            anchorY: 23,
            mask: true,
        }),
        sizeScale: 10,
        getPosition: (d) => d.position,
        getSize: (d) => 5,
        getColor: (d) => [208, 121, 61],
    });

    return (
        <DeckGL
            initialViewState={INITIAL_VIEW_STATE}
            controller={true}
            layers={layers}>
            <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
        </DeckGL>
    );
};
