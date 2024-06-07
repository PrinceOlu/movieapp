import React from "react";
import {
  Button,
  ButtonIcon,
  ButtonText,
  FormControl,
  FormControlLabelText,
  HStack,
  Icon,
  Input as GluestackInput,
  InputIcon,
  SearchIcon,
  VStack,
} from "@gluestack-ui/themed";
import { StyleSheet, TextInput } from "react-native";

const SearchForm = ({ onInputChange, onSubmit }) => {
  return (
    <VStack space={2} width="100%" p={5} my={10}>
      <FormControl isRequired>
        <FormControl.Label fontSize="sm">
          <FormControlLabelText>Movie Search</FormControlLabelText>
        </FormControl.Label>
        <HStack space={2}>
          <GluestackInput style={styles.inputStyles} px={5}>
            <TextInput // Use TextInput from react-native
              onChangeText={(value) => onInputChange(value)}
              placeholder="Enter a Movie..."
            />
          </GluestackInput>
          <Button onPress={onSubmit}>
            <ButtonIcon as={SearchIcon} mr={2} />
            <ButtonText>Search</ButtonText>
          </Button>
        </HStack>
      </FormControl>
    </VStack>
  );
};

const styles = StyleSheet.create({
  inputStyles: { flex: 1, alignItems: "center" },
});

export default SearchForm;
