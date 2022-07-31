import React from "react";
import { StatusBar } from "expo-status-bar";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurant.screen";

const App = () => {
  return (
    <>
      <RestaurantScreen />
      <StatusBar style="auto" />
    </>
  );
};

export default App;
