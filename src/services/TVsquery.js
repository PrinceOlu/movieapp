import axios from "axios";

const API_KEY = "cf7d025727bda336f48da271321bc19d";
const BASE_URL = "https://api.themoviedb.org/3";

const endpoints = {
  airing_today: "/tv/airing_today",
  on_the_air: "/tv/on_the_air",
  popular: "/tv/popular",
  top_rated: "/tv/top_rated",
};

export const TVsquery = async (query) => {
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
