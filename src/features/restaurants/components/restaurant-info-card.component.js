import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import {
  Title,
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  Address,
  Rating,
  SectionEnd,
  Text,
  Icon
} from "./restaurant-info-card.styles";
import star from "../../../../assets/star";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpeningNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((index, key) => <SvgXml key={key} height={20} width={20} xml={star} />)}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (<Text>CLOSED TEMPORARILY</Text>)}
          </SectionEnd>
          <View>
            <Icon source={{ uri: icon }} />
          </View>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
