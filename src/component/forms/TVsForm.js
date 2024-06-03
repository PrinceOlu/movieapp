import React, { useState } from "react";
import { FormControl, VStack } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const TVsForm = ({ onValueChange }) => {
  const [category, setCategory] = useState("airing_today");

  const handleCategoryChange = (value) => {
    setCategory(value);
    onValueChange(value);
  };

  return (
    <VStack space={2} width="100%" p={5} my={10}>
      <FormControl isRequired>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue) => handleCategoryChange(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Airing today" value="airing_today" />
          <Picker.Item label="On the air" value="on_the_air" />
          <Picker.Item label="Popular" value="popular" />
          <Picker.Item label="Top rated" value="top_rated" />
        </Picker>
      </FormControl>
    </VStack>
  );
};

const styles = StyleSheet.create({
  picker: {
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});

export default TVsForm;
