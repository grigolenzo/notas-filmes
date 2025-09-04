function Pagination({ page, setPage }) {
  return (
    <div>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Anterior
      </button>
      <span>Página {page}</span>
      <button onClick={() => setPage(page + 1)}>Próxima</button>
    </div>
  );
}

export default Pagination;
