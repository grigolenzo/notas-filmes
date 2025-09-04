import "./Header.css";

function Header({ search, setSearch, onSearch }) {
  return (
    <header className="header">
      <h1 className="logo">MDB Top 20</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Pesquisar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={onSearch}>Buscar</button>
      </div>
    </header>
  );
}

export default Header;