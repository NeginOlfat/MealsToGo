import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CheckoutScreen } from "../../features/checkout/screens/checkout.screen";
import { CheckoutSuccessScreen } from "../../features/checkout/screens/checkout-success.screen";
import { CheckoutErrorScreen } from "../../features/checkout/screens/checkout-error.screen";

const CheckoutStack = createNativeStackNavigator();

export const CheckoutNavigator = () => (
    <CheckoutStack.Navigator screenOptions={{ headerShown: false }}>
        <CheckoutStack.Screen name="CheckoutHome" component={CheckoutScreen} />
        <CheckoutStack.Screen name="CheckoutSuccess" component={CheckoutSuccessScreen} />
        <CheckoutStack.Screen name="CheckoutError" component={CheckoutErrorScreen} />
    </CheckoutStack.Navigator>
);
