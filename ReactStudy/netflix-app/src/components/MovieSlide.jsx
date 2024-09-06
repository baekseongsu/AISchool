import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const MovieSlide = () => {
  const { popularMovies, topRatedMovies, upcomingMovies, genreList } =
    useSelector((state) => state.movie);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div>
        <h1>Popular Movie</h1>
        <Carousel responsive={responsive}>
          {popularMovies.map((movie, index) => (
            <MovieCard key={index} movie={movie} genres={genreList} />
          ))}
        </Carousel>
      </div>
      <div>
        <h1>Top rated Movie</h1>
        <Carousel responsive={responsive}>
          {topRatedMovies.map((movie, index) => (
            <MovieCard key={index} movie={movie} genres={genreList} />
          ))}
        </Carousel>
      </div>
      <div>
        <h1>Upcoming Movie</h1>
        <Carousel responsive={responsive}>
          {upcomingMovies.map((movie, index) => (
            <MovieCard key={index} movie={movie} genres={genreList} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MovieSlide;
