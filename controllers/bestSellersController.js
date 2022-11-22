// ids mas vendidos:  Anillo de Elden  - 326243
//     LEGO Star Wars: La saga Skywalker - 87441
//     Pokémon Leyendas: Arceus - 665903
//     Horizonte Prohibido Oeste - 452642
//     Call of Duty: Vanguardia - 647552
//     gran turismo 7 - 452633
//     Kirby y la tierra olvidada - 874946
//     mario kart 8 - 757208
//     Madden NFL 22 - 650806
//     Minecraft - 22509
//     fifa22
//     Spider-Man de Marvel: Miles Morales
//     Cazador de monstruos: Asciende
//     Cruce de animales: nuevos horizontes
//     Super Smash Bros Ultimate
//     Mario Party Superestrellas
//     Call of Duty: Black Ops: Guerra Fría
//     Luz moribunda 2: mantente humano

const axios = require('axios')
const API_KEY = process.env.API_KEY
const baseUrl = 'https://api.rawg.io/api/'
const bestSellers = [
  326243, 87441, 665903, 452642, 647552, 452633, 874946, 757208, 650806, 22509,
]

const searchGame = async (id) => {
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

    return game
  } catch (err) {
    return { error: err.message }
  }
}

const games = async (req, res) => {
  let result = []
  for (let i = 0; i < 10; i++) {
    result.push(await searchGame(bestSellers[i]))
  }
  res.json(result)
}

module.exports = games
