# 🎬 Notas Filmes

Um aplicativo React para buscar, visualizar detalhes e salvar filmes favoritos, utilizando a API do [The Movie Database (TMDb)](https://www.themoviedb.org/).

## 📌 Funcionalidades

✅ Página de **Busca**  
- Campo de pesquisa para encontrar filmes.  
- Lista de resultados exibindo pôster, título, ano e nota.  

✅ **Paginação**  
- Permite navegar entre as páginas de resultados.  

✅ Página de **Detalhes**  
- Exibe pôster, título, sinopse, diretor, elenco e nota do filme.  
- Botão **Voltar** para retornar à página anterior.  

✅ Lista de **Favoritos**  
- Adicionar e remover filmes da lista de favoritos.  
- Favoritos são salvos no **localStorage** para persistência.  
- Página dedicada `/favoritos` para visualizar os filmes salvos.  

✅ **Tratamento de Erros & Loading**  
- Indicador de carregamento enquanto busca os dados.  
- Mensagens de erro quando algo dá errado.  

---

## 🚀 Tecnologias Utilizadas

- **React.js** (com Hooks e React Router DOM)  
- **Axios** (requisições HTTP)  
- **TMDb API** (dados dos filmes)  
- **LocalStorage** (persistência de favoritos)  
- **CSS puro** para estilização  

---

## 📂 Estrutura do Projeto

```
src/
│── components/       # Componentes reutilizáveis (Header, MovieCard, Loader, etc.)
│── pages/            # Páginas principais (Home, Detalhes, Favoritos)
│── services/         # Configuração do Axios (api.js)
│── App.jsx           # Rotas principais
│── index.css         # Estilos globais
```

---

## ⚙️ Como Rodar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/notas-filmes.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd notas-filmes
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Crie um arquivo `.env` na raiz do projeto e adicione sua chave da TMDb:
   ```
   VITE_API_KEY=SUA_CHAVE_AQUI
   ```

5. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

6. Abra no navegador:
   ```
   http://localhost:5173
   ```

---

## 🎨 Layout

- Interface escura com cards de filmes em destaque.  
- Cards interativos com hover e animações sutis.  
- Botão de favoritos destacado (❤️).  

---

## 📸 Demonstração

👉 Página inicial com busca e filmes mais bem avaliados.  
👉 Página de detalhes com pôster, sinopse e elenco.  
👉 Página de favoritos persistente no localStorage.  

---

## 📜 Licença

Este projeto foi desenvolvido para fins de estudo e não possui fins comerciais.  
API utilizada: [TMDb](https://www.themoviedb.org/).
