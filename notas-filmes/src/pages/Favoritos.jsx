import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

function Favoritos() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  return (
    <div>
      <h1>Meus Favoritos</h1>
      {favorites.length === 0 ? (
        <p>Nenhum filme favorito ainda.</p>
      ) : (
        <div>
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favoritos;
