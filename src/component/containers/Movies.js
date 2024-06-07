import React, { useState, useEffect } from "react";
import { Center } from "@gluestack-ui/themed";
import MovieForm from "../forms/MovieForm";
import { getMoviesByQuery } from "../../services/getMoviesByQuery";
import Loading from "../layout/Loading";
import MoviesList from "../Lists/MoviesList";

const Movies = ({ navigation }) => {
  const [category, setCategory] = useState("now_playing");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, [category]);

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const data = await getMoviesByQuery(category);
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
    setIsLoading(false);
  };

  const handleInputChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const handleSubmit = () => {
    fetchMovies();
  };

  return (
    <Center px={4}>
      <MovieForm onValueChange={handleInputChange} />

      {isLoading ? (
        <Loading />
      ) : (
        <MoviesList navigation={navigation} movies={movies} />
      )}
    </Center>
  );
};

export default Movies;
