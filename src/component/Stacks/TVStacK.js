import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TVs from "../containers/TVs";
import TVDetail from "../Details/TVDetail";

const Stack = createStackNavigator();

const TVStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MoviesList"
        component={TVs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TVDetail"
        component={TVDetail}
        options={{ title: "TV Details" }}
      />
    </Stack.Navigator>
  );
};

export default TVStack;
