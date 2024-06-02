import React, { useState } from "react";
import { Center } from "@gluestack-ui/themed";
import SearchForm from "../forms/SearchForm";
import { getMoviesByQuery } from "../../services/api"; // Import the getMoviesByQuery function
import Loading from "../layout/Loading";
import MoviesList from "../Lists/MoviesList";

const MovieSearch = ({ navigation }) => {
  const [category, setCategory] = useState("now_playing");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      // Trim leading and trailing spaces from category
      const trimmedCategory = category.trim();
      if (trimmedCategory !== "") {
        // Call getMoviesByQuery with trimmedCategory and endpoint "movie"
        const data = await getMoviesByQuery(trimmedCategory, "movie");
        setMovies(data.results);
      } else {
        // Handle case where category is empty
        setMovies([]);
      }
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
      <SearchForm onInputChange={handleInputChange} onSubmit={handleSubmit} />
      {isLoading ? (
        <Loading />
      ) : (
        <MoviesList navigation={navigation} movies={movies} />
      )}
    </Center>
  );
};

export default MovieSearch;
