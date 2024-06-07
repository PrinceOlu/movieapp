import axios from "axios";

const API_KEY = "cf7d025727bda336f48da271321bc19d";
const BASE_URL = "https://api.themoviedb.org/3";

const endpoints = {
  now_playing: "/movie/now_playing",
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
  upcoming: "/movie/upcoming",
};

export const getMoviesByQuery = async (query) => {
  const endpoint = endpoints[query];
  if (!endpoint) {
    throw new Error(`Invalid query: ${query}`);
  }

  const url = `${BASE_URL}${endpoint}`;

  try {
    const params = {
      api_key: API_KEY,
    };

    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const getMovieById = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}`;

  try {
    const params = {
      api_key: API_KEY,
    };

    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};
