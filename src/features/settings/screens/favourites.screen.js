import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";

import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { NoFavouritesArea } from "../components/settings.style";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantList } from "../../restaurants/components/restaurant-list.style";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";


export const FavouritesScreen = ({ navigation }) => {

    const { favourites } = useContext(FavouritesContext);

    return (
        favourites.length ?
            (
                <SafeArea>
                    < RestaurantList
                        data={favourites}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate("RestaurantDetail", {
                                            restaurant: item
                                        })
                                    }
                                >
                                    <Spacer size="large" position="bottom">
                                        <RestaurantInfoCard restaurant={item} />
                                    </Spacer>
                                </TouchableOpacity>
                            )
                        }}
                        keyExtractor={item => item.name}
                    />
                </SafeArea>
            ) : (
                <NoFavouritesArea><Text variant="body">Not favourites yet</Text></NoFavouritesArea>
            )
    );
};
