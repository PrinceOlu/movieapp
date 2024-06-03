import React, { useState, useEffect } from "react";
import { Center } from "@gluestack-ui/themed";
import TVsForm from "../forms/TVsForm";
import { TVsquery } from "../../services/TVsquery";
import Loading from "../layout/Loading";
import MoviesList from "../Lists/MoviesList";

const TVs = ({ navigation }) => {
  const [category, setCategory] = useState("airing_today");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, [category]);

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const data = await TVsquery(category);
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
    setIsLoading(false);
  };

  const handleInputChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <Center px={4}>
      <TVsForm onValueChange={handleInputChange} />

      {isLoading ? (
        <Loading />
      ) : (
        <MoviesList navigation={navigation} movies={movies} />
      )}
    </Center>
  );
};

export default TVs;
