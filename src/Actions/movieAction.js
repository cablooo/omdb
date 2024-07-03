import axios from "axios";
import { BASE_URL } from "../api";

export const fetchSearch = (movie_name) => async (dispatch) => {
  try {
    const searchMovies = await axios.get(BASE_URL + movie_name);

    if (searchMovies.data && searchMovies.data.Search) {
      dispatch({
        type: "GET_MOVIES",
        payload: {
          inputVal: searchMovies.data.Search,
        },
      });
    } else {
      // If no movies found, dispatch an empty array or handle as per your app logic
      dispatch({
        type: "GET_MOVIES",
        payload: {
          inputVal: [],
        },
      });
    }
  } catch (error) {
    // Handle any errors here, such as network errors or API response errors
    console.error("Error fetching movies:", error);
    // Optionally dispatch an error action or show a notification to the user
  }
};
