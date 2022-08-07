import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TransitionPresets } from "@react-navigation/stack";
import { RestaurantScreen } from "../../features/restaurants/screens/restaurant.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantStack = createNativeStackNavigator();

export const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                cardOverlayEnabled: true,
                ...TransitionPresets.FadeFromBottomAndroid,
            }}
            mode="modal"

        >
            <RestaurantStack.Screen name="Restaurant" component={RestaurantScreen} />
            <RestaurantStack.Screen name="RestaurantDetail" component={RestaurantDetailScreen}
            />
        </RestaurantStack.Navigator>
    )
}