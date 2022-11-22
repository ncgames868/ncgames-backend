const axios = require('axios')
const API_KEY = process.env.API_KEY
const baseUrl = 'https://api.rawg.io/api/'

// buscar un solo juego por id
// https://api.rawg.io/api/games/326243?key=60fb2544d2e0470a9b1dd79552c621da

const game = async (req, res) => {
  let { id } = req.query

  let gamesUrl
  if (id) gamesUrl = baseUrl + 'games/' + id + '?key=' + API_KEY

  try {
    const resp = await axios.get(gamesUrl)

    const result = resp.data
    let game = {}
    let platforms

    // Eliminamos las plataformas android y iOs
    if (result.platforms.length > 0) {
      platforms = result.platforms.filter((p) => {
        return p.platform.name !== 'Android' && p.platform.name !== 'iOS'
      })
      result.platforms = platforms
    }

    game = {
      id: result.id,
      name: result.name,
      background_image: result.background_image,
      platforms: result.platforms,
      categories: result.genres,
      //   tags: result.tags,
      released: result.released,
      esrb: result.esrb_rating,
      price: 99.99,
      //   short_screenshots: result.short_screenshots
    }

    res.status(200).json(game)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
}

module.exports = game
