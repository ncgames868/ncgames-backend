const axios = require('axios')
const API_KEY = process.env.API_KEY // '60fb2544d2e0470a9b1dd79552c621da'; //
const baseUrl = 'https://api.rawg.io/api/'

const categories = async (req, res) => {
  const genresUrl = baseUrl + 'genres?key=' + API_KEY
  const resp = await axios.get(genresUrl)
  const next = resp.data.next
  const results = resp.data.results
  const genres = []
  results.forEach((e) => {
    genres.push({
      id: e.id,
      name: e.name,
      games_count: e.games_count,
    })
  })

  res.json(genres)
}

module.exports = categories
