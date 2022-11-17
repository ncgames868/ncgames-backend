import styled from 'styled-components'

export const Header = styled.header`
  height: 167px;
  width: 100%;
  position: absolute;
  top: 0;
`
export const Nav = styled.nav`
  background: linear-gradient(
    90deg,
    rgba(58, 73, 180, 1) 51%,
    rgba(35, 183, 217, 1) 100%
  );
  height: 167px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid rgb(2, 164, 204);
  box-shadow: 4px 0 8px rgb(2, 83, 103);
`
export const HeaderLogo = styled.div`
  margin-left: 50px;
  img {
    width: 360px;
    cursor: pointer;
    transition: transform .2s ease;
    :hover {
      transform: scale(1.02);
    }
    :active {
      transform: scale(.98);
    }
  }
`
export const HeaderLinks = styled.ul`
  display: flex;
  margin-right: 50px;
  list-style: none;
`
export const HeaderLinksLi = styled.li`
  margin: 0 20px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  a {
    color: rgb(255, 255, 255);
    font-size: 20px;
    padding: 0px 12px;
    :hover {
      color: rgb(7, 3, 43);
      transition: 0.3s;
    }
  }
`
