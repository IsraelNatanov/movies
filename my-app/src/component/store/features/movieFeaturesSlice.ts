import { RootState } from "../store";
import { createSelector, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface Movie {
  imdbID: string;
  Title: string;
  DateAdded: string; 
  Amount:number;
}

interface MoviesState {
  items: Movie[];
}

const initialState: MoviesState = {
  items: [],
};

export const MovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<Movie>) => {
      state.items.push(action.payload);
    },
    deleteMovie: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(items => items.imdbID !== action.payload);
    },
  },
});

export default MovieSlice.reducer;
export const { addMovie, deleteMovie } = MovieSlice.actions;