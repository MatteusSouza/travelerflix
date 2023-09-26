const express = require('express');
const data = require('./db.json');
const app = express();

const ORIGIN = process.env.REACT_APP_ENV === 'development' ? 'http://localhost:8080' : 'https://travelerflix.netlify.app';

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //Esta permitindo solicitações de qualquer origem
  // res.header('Access-Control-Allow-Origin', ORIGIN);
  next();
});

app.get('/api/categorias', (req, res) => {
  const categoriasComVideos = data.categorias.map((categoria) => ({
    ...categoria,
    videos: data.videos.filter((video) => video.categoriaId === categoria.id),
  }));
  res.json(categoriasComVideos);
});

app.get('/api/videos', (req, res) => {
  res.json(data.videos);
});


if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
  });
}

module.exports = app;
