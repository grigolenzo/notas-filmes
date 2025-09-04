import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import Loader from "../components/Loader";
import "./Detalhes.css";


function Detalhes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const response = await api.get(`/movie/${id}?append_to_response=credits`);
        setMovie(response.data);
      } catch {
        console.error("Erro ao carregar detalhes");
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [id]);

  if (loading) return <Loader />;
  if (!movie) return <p>Filme não encontrado.</p>;

  return (
    <div className="detalhes-container">
      <button onClick={() => navigate(-1)} className="back-btn">
        ⬅ Voltar
      </button>

      <div className="detalhes-content">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="detalhes-poster"
        />

        <div className="detalhes-info">
          <h1>{movie.title}</h1>
          <p><strong>Sinopse:</strong> {movie.overview}</p>
          <p><strong>Diretor:</strong> {movie.credits.crew.find(c => c.job === "Director")?.name}</p>
          <p><strong>Elenco:</strong> {movie.credits.cast.slice(0, 5).map(c => c.name).join(", ")}</p>
          <p><strong>Nota:</strong> ⭐ {movie.vote_average}</p>
        </div>
      </div>
    </div>
  );
}

export default Detalhes;
