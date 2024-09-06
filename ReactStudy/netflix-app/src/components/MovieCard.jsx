import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie, genres }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/movie/${movie.id}`); // 클릭 시 MovieDetail 페이지로 이동
  };

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
        backgroundSize: "cover",
        width: "200px",
        height: "300px",
        margin: "10px",
        borderRadius: "10px",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleCardClick} // 클릭 이벤트 추가
    >
      {hovered && (
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "white",
            padding: "10px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "1.2em", marginBottom: "10px" }}>
            {movie.title}
          </h1>
          <div
            style={{
              display: "flex",
              gap: "5px",
              flexWrap: "wrap",
              marginBottom: "10px",
            }}
          >
            {movie.genre_ids.map((id) => (
              <span
                key={id}
                style={{
                  backgroundColor: "red",
                  borderRadius: "5px",
                  padding: "2px 5px",
                  fontSize: "0.8em",
                }}
              >
                {genres.find((genre) => genre.id === id)?.name}
              </span>
            ))}
          </div>
          <p style={{ marginBottom: "5px" }}>평점: {movie.vote_average}점</p>
          <p>청소년</p>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
