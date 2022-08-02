import React from "react";
import { SvgXml } from "react-native-svg";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  Address,
  Rating,
  SectionEnd,
  Icon
} from "./restaurant-info-card.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

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
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, key) => <SvgXml key={key} height={20} width={20} xml={star} />)}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (<Text variant="error">CLOSED TEMPORARILY</Text>)}
            <Spacer position="left" size="large">
              {isOpeningNow && <SvgXml height={20} width={20} xml={open} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
