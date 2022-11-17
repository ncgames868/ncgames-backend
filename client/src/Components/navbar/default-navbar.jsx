<<<<<<< HEAD
import { Header, HeaderLinks, HeaderLinksLi, HeaderLogo, Nav } from "./styles";
import {BsCart} from 'react-icons/bs';
import logo from '../../assets/LogoNCGames.svg'
import { Link, useNavigate } from "react-router-dom";

export const DefaultNavbar = () => {

  const navigate = useNavigate()

  return (
    <Header>
      <Nav>
        <HeaderLogo>
          <img onClick={() => navigate('/')} src={logo} className="logo" alt="logo" />
        </HeaderLogo>
        <HeaderLinks>
          <HeaderLinksLi>
            <a href="/">Games</a>
          </HeaderLinksLi>
          <HeaderLinksLi>
            <a href="/">
              <BsCart size="30px" />
            </a>
          </HeaderLinksLi>
          <HeaderLinksLi>
            <Link to={'/login'}>Log in</Link>
          </HeaderLinksLi>
          <HeaderLinksLi>
            <Link to={'/register'}>Register</Link>
          </HeaderLinksLi>
        </HeaderLinks>
      </Nav>
    </Header>
  );
};
=======
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
>>>>>>> dev
