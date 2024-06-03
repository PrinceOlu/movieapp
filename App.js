import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { GluestackUIProvider, Box } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import axios from "axios";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./src/component/layout/Header";
import { NavigationContainer } from "@react-navigation/native";
import TabBarNavigation from "./src/component/Navigators/TabBarNavigators";
// import { createStackNavigator } from "@react-navigation/stack";

// const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <Header />
        {/* <RecipyContainer /> */}
        <TabBarNavigation />
        <StatusBar bg="blue" />
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
};

export default App;
