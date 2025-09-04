import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer <sua chave>`, // <-- coloca o token inteiro aqui
  },
  params: {
    language: "pt-BR", // mantém para traduzir os textos
  },
});

export default api;
