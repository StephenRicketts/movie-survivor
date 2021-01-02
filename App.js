import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SearchScreen from "./screens/SearchScreen";
import Colors from "./constants/Colors";

export default function App() {
  const Stack = createStackNavigator();

  const headerOptions = {
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={headerOptions}
        initialRouteName="SearchScreen"
      >
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{ title: "Search Movies" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
