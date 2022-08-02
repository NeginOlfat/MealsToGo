import React from "react";
import { SafeAreaView, StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;

export const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: { padding: 16 }
})``;


export const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
        ]}
        renderItem={() => (
          <Spacer size="large" position="bottom">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={item => item.name}

      />
    </SafeArea>
  );
};
