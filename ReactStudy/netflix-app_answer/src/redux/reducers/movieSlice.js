import { createSlice } from "@reduxjs/toolkit";

const moiveSlice = createSlice({
  name: "movie",
  initialState: {
    popularMovies: [],
    topRateMovies: [],
    upcomingMovies: [],
    genreList: [],
  },
  reducers: {
    initData: (state, action) => {
      state.popularMovies = action.payload.p;
      state.topRateMovies = action.payload.t;
      state.upcomingMovies = action.payload.u;
      state.genreList = action.payload.g;
    },
  },
});

export const { initData } = moiveSlice.actions;

export default moiveSlice.reducer;
