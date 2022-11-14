const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const axios = require('axios');
const API_KEY = process.env.API_KEY; // '60fb2544d2e0470a9b1dd79552c621da'; //

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const options = '&search=walking dead&search_exact=true'; //&dates=2019-09-01,2019-09-30&platforms=18,1,7';
const baseUrl = 'https://api.rawg.io/api/';
const gamesUrl = baseUrl + 'games?key=' + API_KEY + options;
const genresUrl = baseUrl + 'genres?key=' + API_KEY + options;
const platformsUrl = baseUrl + 'platforms?key=' + API_KEY; // + options;

app.get('/games', async (req, res) => {
  const resp = await axios.get(gamesUrl); // gamesUrl
  const total = resp.data.count;

  console.log('resp', resp);
  const next = resp.data.next;
  const results = resp.data.results;
  const games = [];
  results.forEach((e) => {
    // Eliminamos las plataformas android y iOs
    if (e.platforms) {
      const platforms = e.platforms.filter((p) => {
        console.log('p', p);
        return p.platform.name !== 'Android' && p.platform.name !== 'iOS';
      });
      e.platforms = platforms;
      console.log('actual', e.platforms);
    }
    games.push({
      id: e.id,
      name: e.name,
      background_image: e.background_image,
      platforms: e.platforms,
      categories: e.genres,
      //   tags: e.tags,
      released: e.released,
      esrb: e.esrb_rating,
      //   short_screenshots: e.short_screenshots
    });
  });

  console.log('total', total);
  res.json({ next, total, games });
});

app.get('/genres', async (req, res) => {
  const resp = await axios.get(genresUrl);
  const next = resp.data.next;
  const results = resp.data.results;
  const genres = [];
  results.forEach((e) => {
    genres.push({
      id: e.id,
      name: e.name,
      games_count: e.games_count,
    });
  });

  console.log('next', next, genres);
  res.json(genres);
});

app.get('/platforms', async (req, res) => {
  const resp1 = await axios.get(platformsUrl);
  const resp2 = await axios.get(platformsUrl + '&page=2');

  const platforms = [];
  resp1.data.results.forEach((e) => {
    platforms.push({
      id: e.id,
      name: e.name,
      games_count: e.games_count,
    });
  });

  resp2.data.results.forEach((e) => {
    platforms.push({
      id: e.id,
      name: e.name,
      games_count: e.games_count,
    });
  });

  res.json(platforms);
});

const server = app.listen(PORT, () => {
  console.log(`Server listening in: https://localhost:${PORT}`);
});

server.on('error', (error) => console.log('Error: ', error.message));

mongoose.connect('mongodb://localhost/gamesdb', (err) => {
  if (err) throw err;
  console.log('Conectado exitosamente a GamesDB');
});
