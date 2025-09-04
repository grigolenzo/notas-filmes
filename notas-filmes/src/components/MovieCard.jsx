import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie, onFavorite, isFavorite }) {
  const navigate = useNavigate();

  return (
    <div
      className="movie-card"
      onClick={() => navigate(`/detalhes/${movie.id}`)}
      style={{ cursor: "pointer" }}
    >
      <img className="movie-poster" src={movie.posterUrl} alt={movie.title} />
      <div className="movie-title">{movie.title}</div>
      <div className="movie-date">{movie.release_date}</div>
      <div className="movie-rating">
        <span>⭐</span> {movie.vote_average}
      </div>
      <button
        className={`favorite-btn${isFavorite ? " active" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          onFavorite(movie);
        }}
        title={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      >
        ♥
      </button>
    </div>
  );
}

export default MovieCard;