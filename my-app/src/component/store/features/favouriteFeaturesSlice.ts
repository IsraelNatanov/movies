import { RootState } from "../store";
import { createSelector, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface Movie {
  imdbID: string;
  Title: string;
}

interface FavoriteState {
  favorites: Movie[];
}

const initialState: FavoriteState = {
  favorites: [],
};

export const favoriteFeaturesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Movie>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((movie) => movie.imdbID !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteFeaturesSlice.actions;

export const isMovieFavorite = (imdbID: string) => (state: RootState) =>
  state.favourite.favorites.some((movie) => movie.imdbID === imdbID);

export default favoriteFeaturesSlice.reducer;