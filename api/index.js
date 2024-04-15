import axios from 'axios';

const API_KEY = '796184f5';

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
    return response.data.Search;
  } catch (error) {
    throw new Error('Error fetching movies');
  }
};

export const getMovieDetails = async (imdbID) => {
  try {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching movie details');
  }
};
