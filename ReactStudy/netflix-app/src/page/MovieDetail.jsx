import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

const MovieDetail = () => {
  const { id } = useParams(); // URL에서 영화 ID를 받아옴
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await api.get(`/movie/${id}?language=ko-KR`);
        setMovie(response.data);
      } catch (error) {
        console.error("영화 데이터를 가져오는 중 오류가 발생했습니다.", error);
      }
    };

    fetchMovieDetail();
  }, [id]);

  if (!movie) {
    return <div>로딩 중...</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={styles.poster}
        />
      </div>
      <div style={styles.detailsContainer}>
        <h1 style={styles.title}>{movie.title}</h1>
        <p style={styles.tagline}>{movie.tagline}</p>
        <div style={styles.genres}>
          {movie.genres.map((genre) => (
            <span key={genre.id} style={styles.genreBadge}>
              {genre.name}
            </span>
          ))}
        </div>
        <p style={styles.info}>
          <strong>출시일:</strong> {movie.release_date}
        </p>
        <p style={styles.info}>
          <strong>런닝타임:</strong> {movie.runtime}분
        </p>
        <p style={styles.info}>
          <strong>평점:</strong> {movie.vote_average}
        </p>
        <p style={styles.info}>
          <strong>관람 등급:</strong>{" "}
          {movie.adult ? "18세 미만" : "전체 관람가"}
        </p>
        <p style={styles.overview}>{movie.overview}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    padding: "20px",
    color: "white",
    backgroundColor: "#141414",
    fontFamily: "Arial, sans-serif",
  },
  imageContainer: {
    flex: "1",
    marginRight: "20px",
  },
  poster: {
    width: "100%",
    borderRadius: "10px",
  },
  detailsContainer: {
    flex: "2",
  },
  title: {
    fontSize: "2.5em",
    marginBottom: "10px",
  },
  tagline: {
    fontSize: "1.2em",
    fontStyle: "italic",
    marginBottom: "20px",
  },
  genres: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  genreBadge: {
    backgroundColor: "#e50914",
    borderRadius: "5px",
    padding: "5px 10px",
    fontSize: "0.9em",
  },
  info: {
    fontSize: "1.1em",
    marginBottom: "10px",
  },
  overview: {
    fontSize: "1.1em",
    lineHeight: "1.6em",
    marginTop: "20px",
  },
};

export default MovieDetail;
