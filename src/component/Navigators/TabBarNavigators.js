import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MovieContainer from "../containers/MovieContainer";
import MovieSearch from "../containers/MovieSearch";
// import TVshows from "../containers/TV-shows";

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
        name="MovieContainer"
        component={MovieContainer}
        options={{ tabBarLabel: "Movies" }}
      />
      <Tab.Screen
        name="MovieSearch"
        component={MovieSearch}
        options={{ tabBarLabel: "Search Movie" }}
      />
      {/* <Tab.Screen
        name="TVshows"
        component={TVshows}
        options={{ tabBarLabel: "TV Shows" }}
      /> */}
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
