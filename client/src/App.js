import { HashRouter, Routes, Route } from 'react-router-dom'
import { AppContainer } from './AppGlobalStyles';
import { DefaultFooter } from './Components/footer/default-footer';
import { DefaultNavbar } from './Components/navbar/default-navbar';
import ForgotPassword from './pages/ForgotPassword';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <HashRouter>
      <AppContainer>
        <DefaultNavbar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/forgotPassword' element={<ForgotPassword />} />
              <Route path='/register' element={<RegisterPage />} />
            </Routes>
        <DefaultFooter />
      </AppContainer>
    </HashRouter>
  );
}

export default App;