import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'
import { AppContainer } from './AppGlobalStyles';
import { DefaultFooter } from './Components/footer/default-footer';
import { DefaultNavbar } from './Components/navbar/default-navbar';
import CreateNewPassword from './pages/CreateNewPassword';
import ForgotPassword from './pages/ForgotPassword';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {

  const [games, setGames] = useState()

  useEffect(() => {
    const URL = 'https://nc8-68backend-production.up.railway.app/games'

    axios.get(URL)
      .then(res => setGames(res.data))
      .catch(err => console.log(err))

      console.log(games)
  }, [])

  return (
    <HashRouter>
      <AppContainer>
        <DefaultNavbar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/forgotPassword' element={<ForgotPassword />} />
              <Route path='/createNewPassword' element={<CreateNewPassword />} />
              <Route path='/register' element={<RegisterPage />} />
            </Routes>
        <DefaultFooter />
      </AppContainer>
    </HashRouter>
  );
}

export default App;