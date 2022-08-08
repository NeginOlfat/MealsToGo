import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { ScrollView, TouchableOpacity } from "react-native";

import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";


const FavouritesWrappe = styled(Card)`
    padding: 10px;
    z-index: 999;
    border-radius: 15px;
`;

export const FavouritesBar = ({ favourites, onNavigation }) => {

    if (!favourites.length) {
        return null;
    }

    return (
        <FavouritesWrappe>
            <Spacer position="left" size="large">
                <Text variant="caption">Favourites</Text>
            </Spacer>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {favourites.map((restaurant) => {
                    return (
                        <Spacer key={restaurant.name} position="left" size="medium">
                            <TouchableOpacity
                                onPress={() => onNavigation("RestaurantDetail", { restaurant })}
                            >
                                <CompactRestaurantInfo restaurant={restaurant} />
                            </TouchableOpacity>
                        </Spacer>
                    )
                })}
            </ScrollView>
        </FavouritesWrappe>
    );
};
