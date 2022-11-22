const axios = require('axios')
const API_KEY = process.env.API_KEY // '60fb2544d2e0470a9b1dd79552c621da'; //
const baseUrl = 'https://api.rawg.io/api/'

const platforms = async (req, res) => {
  const platformsUrl = baseUrl + 'platforms?key=' + API_KEY // + options;
  const resp1 = await axios.get(platformsUrl)
  const resp2 = await axios.get(platformsUrl + '&page=2')

  const platforms = []
  resp1.data.results.forEach((e) => {
    platforms.push({
      id: e.id,
      name: e.name,
      games_count: e.games_count,
    })
  })

  resp2.data.results.forEach((e) => {
    platforms.push({
      id: e.id,
      name: e.name,
      games_count: e.games_count,
    })
  })

  res.json(platforms)
}

module.exports = platforms
