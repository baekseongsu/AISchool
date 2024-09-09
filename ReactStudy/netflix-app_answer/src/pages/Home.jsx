import React, { useEffect } from "react";
import api from "../api";
import { useDispatch, useSelector } from "react-redux";
import { initData } from "../redux/reducers/movieSlice";
import Banner from "../components/Banner";
import MovieList from "../components/MovieList";

const Home = () => {
  const { popularMovies, topRateMovies, upcomingMovies } = useSelector(
    (state) => state.movie
  );
  const dispatch = useDispatch();

  const getMovieInfoList = async () => {
    const popularApi = api.get("/movie/popular?language=ko-KR&page=1");
    const topRatedApi = api.get("/movie/top_rated?language=ko-KR&page=1");
    const upcomingApi = api.get("/movie/upcoming?language=ko-KR&page=1");
    const genreApi = api.get("/genre/movie/list?language=ko-KR");

    // Promise.all([]): 동시에 여러 개의 API호출을 해야 할 경우 사용
    // 하나라도 통신과정에서 오류가 발생하면 모든 요청이 reject(거절) 되는 방식
    const [popular, topRate, upcoming, genre] = await Promise.all([
      popularApi,
      topRatedApi,
      upcomingApi,
      genreApi,
    ]);

    dispatch(
      initData({
        p: popular.data.results,
        t: topRate.data.results,
        u: upcoming.data.results,
        g: genre.data.genres,
      })
    );
  };

  useEffect(() => {
    getMovieInfoList();
  }, []);

  return (
    <div>
      {popularMovies.length > 0 ? (
        <div>
          <Banner data={popularMovies[0]}></Banner>

          <h3>인기있는 영화</h3>
          <MovieList list={popularMovies}></MovieList>

          <h3>평점이 높은 영화</h3>
          <MovieList list={topRateMovies}></MovieList>

          <h3>곧 개봉하는 영화</h3>
          <MovieList list={upcomingMovies}></MovieList>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
