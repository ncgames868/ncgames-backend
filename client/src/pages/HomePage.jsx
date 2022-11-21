import { useEffect, useState } from 'react'
import axios from 'axios'
import Search from '../Components/search/Search'
import { Card } from '../Components/card/card'
import { GamesContainer, MediumSeparator, Text, Subtitle, TitlesContainer } from '../AppGlobalStyles'

const HomePage = () => {

  //! Se obtienen todos los juegos de la BD

  const [allGames, setAllGames] = useState([])

  useEffect(() => {
    const URL = 'https://nc8-68backend-production.up.railway.app/games'
    axios.get(URL)
      .then(res => {
        setAllGames(res.data.games)
        setGamesToShow(res.data.games)
      })
      .catch(err => console.log(err.data))
  }, [])

  //! Se crea es estado de los juegos a mostrar

  const [search, setSearch] = useState()
  const [gamesToShow, setGamesToShow] = useState(allGames)

  useEffect(() => {
    if (!search) {
      setGamesToShow(allGames)
    } else {
      setGamesToShow(allGames.filter((dato) =>
        dato.name.toLowerCase().includes(search.toLocaleLowerCase())
      ))
    }
  }, [search, allGames])

  return (
    <section>
      <MediumSeparator></MediumSeparator>
      <Search setSearch={setSearch} />
      <TitlesContainer style={{maxWidth: '1360px'}}>
        <Subtitle  className='color-gray'>All Games</Subtitle>
      </TitlesContainer>
      <GamesContainer>
        {
          (gamesToShow.length !== 0)
          ?
            gamesToShow.map((game) => (
              <Card 
                key={game.id}
                title={game.name}
                price={game.price}
                img={game.background_image}
              />
            ))
          :
          <Text style={{margin: '0 auto'}}>No games found</Text>
        }
      </GamesContainer>
    </section>
  )
}

export default HomePage