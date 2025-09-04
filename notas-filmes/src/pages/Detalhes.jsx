import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Loader from "../components/Loader";

function Detalhes() {
  const { id } = useParams();
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
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>Diretor: {movie.credits.crew.find(c => c.job === "Director")?.name}</p>
      <p>Elenco: {movie.credits.cast.slice(0, 5).map(c => c.name).join(", ")}</p>
      <p>Nota: {movie.vote_average}</p>
    </div>
  );
}

export default Detalhes;
