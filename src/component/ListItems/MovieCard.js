import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const MovieCard = ({ title, image }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }}
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 300,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MovieCard;
