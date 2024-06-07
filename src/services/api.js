import axios from "axios";

const API_KEY = "cf7d025727bda336f48da271321bc19d";
const BASE_URL = "https://api.themoviedb.org/3";

// Define the endpoints object
const endpoints = {
  movie: "/search/movie",
  multi: "/search/multi",
  tv: "/search/tv",
};

export const getMoviesByQuery = async (query, endpoint) => {
  if (!endpoints.hasOwnProperty(endpoint)) {
    throw new Error(`Invalid endpoint: ${endpoint}`);
  }

  const url = `${BASE_URL}${endpoints[endpoint]}`;

  try {
    const params = {
      api_key: API_KEY,
      query: query,
    };
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
