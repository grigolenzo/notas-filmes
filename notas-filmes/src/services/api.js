import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTc5MjhhZjQxZDk5OTQ4ZWM3NDE2MjdkN2QxZmZkMCIsIm5iZiI6MTc1NjczNzUzMy45MTkwMDAxLCJzdWIiOiI2OGI1YWZmZDE5NmZkZTlkMGYxNTgyMTciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ui9bRdjd9n_RpAXelhyMXIobxMpg9KOd8NyS_Fwu0FY`, // <-- coloca o token inteiro aqui
  },
  params: {
    language: "pt-BR", // mantém para traduzir os textos
  },
});

export default api;
