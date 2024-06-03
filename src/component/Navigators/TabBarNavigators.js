import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MoviesStack from "../Stacks/MoviesStack";
import SearchMovies from "../containers/SearchMovies";
import TVs from "../containers/TVs";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          marginTop: 24,
        },
      }}
    >
      <Tab.Screen
        name="Movies"
        component={MoviesStack}
        options={{ tabBarLabel: "Movies" }}
      />
      <Tab.Screen
        name="SearchMovies"
        component={SearchMovies}
        options={{ tabBarLabel: "Search Movie" }}
      />
      <Tab.Screen
        name="TV"
        component={TVs}
        options={{ tabBarLabel: "TV Shows" }}
      />
    </Tab.Navigator>
  );
}

export default function TabBarNavigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
