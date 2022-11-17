import logo from '../../assets/LogoNCGames.svg';
import './Header.css';
import {BsCart} from 'react-icons/bs';

export const DefaultNavbar = () => {
  return (
    <header>
      <nav className="Header-nav">
        <div className="Header-logo">
        <img src={logo} className="logo" alt="logo" />
        </div>
       <ul className="Header-links">
          <li><a href="#!" >Games</a></li>
          <li><a href="#!"><BsCart size='30px' /></a></li>
          <li><a href="#!" >Log in</a></li>
          <li><a href="#!" >Register</a></li>
        </ul>
       </nav>
    </header>
  );
}
