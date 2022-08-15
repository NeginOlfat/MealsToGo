import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FavouritesBar } from "../../../components/favourite/favourites-bar.component";
import { FadeInView } from "../../../components/animations/fade.animation";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantList } from "../components/restaurant-list.style";
import { Search } from "../components/search.component";


export const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestaurantScreen = ({ navigation }) => {

  const { restaurants, error, loading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);

  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>

      {loading && (
        <LoadingContainer>
          <ActivityIndicator animating={true} color={Colors.blue300} size={50} />
        </LoadingContainer>
      )}

      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => {
          isToggled ? setIsToggled(false) : setIsToggled(true);
        }}
      />
      {isToggled && <FavouritesBar favourites={favourites} onNavigation={navigation.navigate} />}

      {!error && !loading && (
        < RestaurantList
          data={restaurants}
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
                  <FadeInView>
                    <RestaurantInfoCard restaurant={item} />
                  </FadeInView>
                </Spacer>
              </TouchableOpacity>
            )
          }}
          keyExtractor={item => item.name}
        />
      )}
    </SafeArea>
  );
}
