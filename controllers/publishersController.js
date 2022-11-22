const axios = require('axios')
const API_KEY = process.env.API_KEY // '60fb2544d2e0470a9b1dd79552c621da'; //
const baseUrl = 'https://api.rawg.io/api/'

const publishers = async (req, res) => {
  const publishersUrl = baseUrl + 'publishers?key=' + API_KEY // + options;
  const resp = await axios.get(publishersUrl)
  const next = resp.data.next
  const results = resp.data.results
  const publishers = []
  results.forEach((e) => {
    publishers.push({
      id: e.id,
      name: e.name,
      games_count: e.games_count,
    })
  })
  res.json(publishers)
}

module.exports = publishers
