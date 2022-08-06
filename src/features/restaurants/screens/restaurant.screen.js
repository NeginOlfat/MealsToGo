import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Search } from "../components/search.component";


export const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: { padding: 16 }
})``;

export const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;


export const RestaurantScreen = () => {
  const { restaurants, error, loading } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {loading && (
        <LoadingContainer>
          <ActivityIndicator animating={true} color={Colors.blue300} size={50} />
        </LoadingContainer>
      )}
      <Search />
      {!error && !loading && < RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <Spacer size="large" position="bottom">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={item => item.name}
      />}
    </SafeArea>
  );
};
