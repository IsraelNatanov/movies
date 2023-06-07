import { configureStore } from "@reduxjs/toolkit";
import { MovieSlice } from "./features/movieFeaturesSlice";
import { favoriteFeaturesSlice } from "./features/favouriteFeaturesSlice";

export const store = configureStore({
  reducer: {
    movie: MovieSlice.reducer,
    favourite: favoriteFeaturesSlice.reducer,

  },
});
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
