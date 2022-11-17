import { HashRouter, Routes, Route } from 'react-router-dom'
import './app.css'
import { DefaultFooter } from './Components/footer/default-footer';
import { DefaultNavbar } from './Components/navbar/default-navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <DefaultNavbar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
            </Routes>
        <DefaultFooter />
      </div>
    </HashRouter>
  );
}

export default App;