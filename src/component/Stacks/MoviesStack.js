import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Movies from "../containers/Movies";
import MovieDetail from "../Details/MovieDetail";

const Stack = createStackNavigator();

const MoviesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MoviesList"
        component={Movies}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={{ title: "Movie Details" }}
      />
    </Stack.Navigator>
  );
};

export default MoviesStack;
