import { Link } from "react-router-dom";
import "./Header.css";

function Header({ search, setSearch, onSearch }) {
  return (
    <header className="header">
      <h1 className="logo">Notas Filmes</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Pesquisar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch()}
        />
        <button onClick={onSearch}>Buscar</button>
        <Link to="/favoritos" className="favorites-link">
          ❤️ Favoritos
        </Link>
      </div>
    </header>
  );
}

export default Header;
