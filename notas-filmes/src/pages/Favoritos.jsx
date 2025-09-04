import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";

function Favoritos() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  const handleRemoveFavorite = (movieToRemove) => {
    const updated = favorites.filter((fav) => fav.id !== movieToRemove.id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div>
      <button onClick={() => navigate(-1)} className="back-btn">
        ⬅ Voltar
      </button>

      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        Meus Favoritos ❤️
      </h1>

      {favorites.length === 0 ? (
        <p style={{ textAlign: "center" }}>Nenhum filme favorito ainda.</p>
      ) : (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onFavorite={handleRemoveFavorite}
              isFavorite={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favoritos;
