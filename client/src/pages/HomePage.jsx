import { useEffect, useState } from 'react'
import axios from 'axios'
import { CardGrid } from '../Components/card-grid/card-grid'
import { Layout } from '../Components/layout/layout'

const HomePage = () => {
  const [games, setGames] = useState([])

  useEffect(() => {
    const URL = 'https://nc8-68backend-production.up.railway.app/games'
    axios.get(URL)
      .then(res => setGames(res.data.games))
      .catch(err => console.log(err.data))
  }, [])

  return (
    <Layout>
      <CardGrid games={games} title="Best Seller" />
      <CardGrid games={games} title="Recomendations" />
    </Layout>
  )
}

export default HomePage