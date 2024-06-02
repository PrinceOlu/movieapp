import React from "react";
import { Box, Text, StatusBar } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="blue" />
      <Box
        bg="blue"
        justifyContent="center"
        alignItems="center"
        safeAreaTop
        py={5}
      >
        <Text color="white" fontSize={20} fontWeight="bold">
          Movie App
        </Text>
      </Box>
    </SafeAreaView>
  );
};

export default Header;
