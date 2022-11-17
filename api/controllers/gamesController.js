const axios = require('axios')
const API_KEY = process.env.API_KEY // '60fb2544d2e0470a9b1dd79552c621da'; //
const baseUrl = 'https://api.rawg.io/api/'

// const options = '&search=walking dead&search_exact=true' //&dates=2019-09-01,2019-09-30&platforms=18,1,7';

const games = async (req, res) => {
  let { search, platforms, dates, page } = req.query

  if (search) search = '&search=' + search + '&search_exact=true'
  else search = ''
  if (platforms) platforms = '&platforms=' + platforms
  else platforms = ''
  if (dates) dates = '&dates=' + dates
  else dates = ''
  if (page) page = '&page=' + page
  else page = ''

  const options = search + platforms + dates + page
  const gamesUrl = baseUrl + 'games?key=' + API_KEY + options

  const resp = await axios.get(gamesUrl) // gamesUrl
  const total = resp.data.count

  const pages = Math.ceil(total / 20)
  const results = resp.data.results
  const games = []
  results.forEach((e) => {
    // Eliminamos las plataformas android y iOs
    if (e.platforms) {
      const platforms = e.platforms.filter((p) => {
        return p.platform.name !== 'Android' && p.platform.name !== 'iOS'
      })
      e.platforms = platforms
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
      price: 99.99,
      //   short_screenshots: e.short_screenshots
    })
  })

  res.json({ total, pages, games })
}

module.exports = games
