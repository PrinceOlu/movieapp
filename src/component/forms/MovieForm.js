// MovieForm.js
import React, { useState } from "react";
import { FormControl, VStack, Text } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const MovieForm = ({ onValueChange }) => {
  const [category, setCategory] = useState("now_playing");

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
          <Picker.Item label="Now Playing" value="now_playing" />
          <Picker.Item label="Popular" value="popular" />
          <Picker.Item label="Top Rated" value="top_rated" />
          <Picker.Item label="Upcoming" value="upcoming" />
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

export default MovieForm;
