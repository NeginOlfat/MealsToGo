import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const Title = styled.Text`
  padding: 16px;
  color: red;
`;

export const RestaurantCard = styled(Card)`
  width: 95%;
  align-self: center;
`;

export const RestaurantCardCover = styled(Card.Cover)`
  background-color: white;
  padding: 16px;
`;
