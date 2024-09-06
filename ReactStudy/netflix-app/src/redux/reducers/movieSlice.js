import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    genreList: [], // 장르 목록 추가
  },
  reducers: {
    initData: (state, action) => {
      state.popularMovies = action.payload.popular;
      state.topRatedMovies = action.payload.topRated;
      state.upcomingMovies = action.payload.upcoming;
      state.genreList = action.payload.genres; // 장르 목록 저장
    },
    setGenreList: (state, action) => {
      // 장르 목록을 업데이트하는 리듀서
      state.genreList = action.payload;
    },
  },
});

export const MovieActions = movieSlice.actions;

export default movieSlice.reducer;
