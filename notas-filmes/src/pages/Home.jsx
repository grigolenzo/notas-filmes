import { useEffect, useState } from "react";
import api from "../services/api";
import Header from "../components/Header";
import Background from "../components/Background";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const fetchMovies = async () => {
    setLoading(true);
    setError("");
    try {
      const endpoint = search
        ? `/search/movie?query=${search}&page=${page}`
        : `/movie/top_rated?page=${page}`;
      const response = await api.get(endpoint);
      // Adiciona posterUrl para cada filme (exemplo fictício se não vier da API)
      const moviesWithPoster = response.data.results.map((movie) => ({
        ...movie,
        posterUrl: movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : `/assets/${movie.title.replace(/\s/g, "_").toLowerCase()}.jpg`,
      }));
      setMovies(moviesWithPoster);
    } catch {
      setError("Erro ao carregar filmes. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [page, search]);

  const handleFavorite = (movie) => {
    const isFav = favorites.some((fav) => fav.id === movie.id);
    let updated;
    if (isFav) {
      updated = favorites.filter((fav) => fav.id !== movie.id);
    } else {
      updated = [...favorites, movie];
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div>
      <Background />
      <Header search={search} setSearch={setSearch} onSearch={fetchMovies} />
      {loading && <Loader />}
      {error && <p>{error}</p>}
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onFavorite={handleFavorite}
            isFavorite={favorites.some((fav) => fav.id === movie.id)}
          />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default Home;
