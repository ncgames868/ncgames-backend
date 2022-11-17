import { HashRouter, Routes, Route } from 'react-router-dom'
import './app.css'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <HashRouter>
      {/* Aquí se pondrá el Header */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      {/* Aquí se pondrá el Footer */}
    </HashRouter>
  );
}

export default App;