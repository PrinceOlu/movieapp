import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Movies from "../containers/Movies";
import SearchMovies from "../containers/SearchMovies";
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
        name="Movies"
        component={Movies}
        options={{ tabBarLabel: "Movies" }}
      />
      <Tab.Screen
        name="SearchMovies"
        component={SearchMovies}
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
