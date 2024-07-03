// Import the action types if necessary

// Define the initial state
const initialState = {
    inputVal: [],
  };
  
  // Load movie details from local storage if available
  const storedMovieDetails = JSON.parse(localStorage.getItem("movieDetails"));
  
  if (storedMovieDetails) {
    initialState.inputVal = storedMovieDetails;
  }
  
  // Define the reducer function
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_MOVIES':
        // Update the state with the fetched movie details
        return {
          ...state,
          inputVal: action.payload,
        };
      case 'CLEAR_SEARCHED':
        // Clear the movie details from the state
        return {
          ...state,
          inputVal: [],
        };
      default:
        return state;
    }
  };
  
  export default movieReducer;
  