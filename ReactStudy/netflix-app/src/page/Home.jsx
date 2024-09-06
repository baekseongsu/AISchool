import React, { useEffect } from "react";
import { MovieActions } from "../redux/reducers/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import api from "../api";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies } = useSelector((state) => state.movie);

  // 영화 데이터를 가져오는 함수
  const getMovieData = async () => {
    const popularRes = await api.get("/movie/popular?language=ko-KR&page=1");
    const topRatedRes = await api.get("/movie/top_rated?language=ko-KR&page=1");
    const upcomingRes = await api.get("/movie/upcoming?language=ko-KR&page=1");

    // 장르 목록을 가져오는 API 호출 추가
    const genreRes = await api.get("/genre/movie/list?language=ko-KR");

    console.log(
      popularRes.data,
      topRatedRes.data,
      upcomingRes.data,
      genreRes.data
    );

    // 데이터를 payload 형식으로 변환
    const movieData = {
      popular: popularRes.data.results,
      topRated: topRatedRes.data.results,
      upcoming: upcomingRes.data.results,
      genres: genreRes.data.genres, // 장르 데이터 추가
    };

    // initData 액션 함수에 영화 데이터와 장르 목록을 전달
    dispatch(MovieActions.initData(movieData));
    dispatch(MovieActions.setGenreList(genreRes.data.genres)); // 장르 목록을 별도로 저장
  };

  // 컴포넌트가 처음 렌더링될 때 getMovieData를 호출합니다.
  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <div>
      {/* {popularMovies.length} */}
      {popularMovies.length > 0 ? (
        <Banner popular={popularMovies[0]}></Banner>
      ) : (
        ""
      )}
      <MovieSlide></MovieSlide>
    </div>
  );
};

export default Home;
