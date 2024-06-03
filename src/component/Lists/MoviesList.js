import React from "react";
import { FlatList } from "react-native";
import MovieCard from "../ListItems/MovieCard";

const MoviesList = ({ navigation, movies }) => {
  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <MovieCard
          title={item.title}
          image={item.poster_path}
          navigation={navigation}
          movieId={item.id}
        />
      )}
    />
  );
};

export default MoviesList;
