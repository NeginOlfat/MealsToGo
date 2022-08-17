import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CardStyleInterpolators } from "@react-navigation/stack";

import { SettingsScreen } from "../../features/settings/screens/setting.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import { CameraScreen } from "../../features/settings/screens/camera.screen";


const SettingsStack = createNativeStackNavigator();

export const SettingsNavigator = () => {
    return (
        <SettingsStack.Navigator
            options={{
                headerMode: "screen",
                CardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <SettingsStack.Screen name="Setting" component={SettingsScreen} options={{ header: () => null }} />
            <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
            <SettingsStack.Screen name="Camera" component={CameraScreen} />
        </SettingsStack.Navigator>
    )
};
