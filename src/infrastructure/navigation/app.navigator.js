import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { colors } from "../theme/colors";
import { SafeArea } from "../../components/utility/safe-area.component";


const SettingsScreen = () => <SafeArea><Text>Settings!</Text></SafeArea>

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings"
}

const createScreenOption = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
        tabBarIcon: ({ color, size }) => {
            return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.brand.primary,
        tabBarInactiveTintColor: colors.brand.muted,
    }
}

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={createScreenOption}
            >
                <Tab.Screen name="Restaurants" component={RestaurantsNavigator} options={{ header: () => null }} />
                <Tab.Screen name="Map" component={MapScreen} options={{ header: () => null }} />
                <Tab.Screen name="Settings" component={SettingsScreen} options={{ header: () => null }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
};
