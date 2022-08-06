import React from "react";
import { Text } from "react-native";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { LocationContextProvider } from "./src/services/location/location.context";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { theme } from "./src/infrastructure/theme";
import { colors } from "./src/infrastructure/theme/colors";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurant.screen";
import { SafeArea } from "./src/components/utility/safe-area.component";

const SettingsScreen = () => <SafeArea><Text>Settings!</Text></SafeArea>


const MapScreen = () => <SafeArea><Text>Map!</Text></SafeArea>

const TAB_ICON = {
  Restaurant: "md-restaurant",
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

const Tab = createBottomTabNavigator();

const App = () => {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <ThemeProvider theme={theme} >
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={createScreenOption}
              >
                <Tab.Screen name="Restaurant" component={RestaurantScreen} options={{ header: () => null }} />
                <Tab.Screen name="Map" component={MapScreen} options={{ header: () => null }} />
                <Tab.Screen name="Settings" component={SettingsScreen} options={{ header: () => null }} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
        <StatusBar style="auto" />
      </ThemeProvider>
    </>
  );
};

export default App;
