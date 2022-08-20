import React, { useContext, useState, useEffect } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { LocationContext } from "../../../services/location/location.context";
import { Search } from "../components/search.component";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";


const Map = styled(MapView)`
  height: 100%;
  width:100%;
`;

export const MapScreen = ({ navigation }) => {

    const { location } = useContext(LocationContext);
    const { restaurants } = useContext(RestaurantsContext);

    const [latDelta, setLatDelta] = useState(0);

    const { lat, lng, viewport } = location;

    useEffect(() => {
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;
        setLatDelta(northeastLat - southwestLat);
    }, [location, viewport]);

    return (
        <>
            <Search />
            <Map
                region={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: latDelta,
                    longitudeDelta: 0.01,
                }}
            >
                {restaurants.map((restaurant) => {
                    return (
                        <Map.Marker
                            key={restaurant.name}
                            title={restaurant.name}
                            coordinate={{
                                latitude: restaurant.geometry.location.lat,
                                longitude: restaurant.geometry.location.lng
                            }}
                        >
                            <Map.Callout
                                onPress={() => navigation.navigate("RestaurantDetail", { restaurant })}
                            >
                                <CompactRestaurantInfo isMap restaurant={restaurant} />
                            </Map.Callout>
                        </Map.Marker>
                    );
                })}
            </Map>
        </>
    );
};
