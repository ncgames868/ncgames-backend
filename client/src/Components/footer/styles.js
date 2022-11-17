import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background: linear-gradient(
    90deg,
    rgba(58, 73, 180, 1) 51%,
    rgba(35, 183, 217, 1) 100%
  );
  height: 170px;
  width: 100%;
  position: absolute;
  bottom: 0;
`

export const FooterSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const FooterLinks = styled.ul`
  display: flex;
  margin-left: 70px;
  list-style: none;

  li {
    margin: 0 20px;
    a {
      color: rgb(255, 255, 255);
      padding: 0px 12px;
      display: block;
      :hover {
        color: rgb(7, 3, 43);
        transition: 0.3s;
      }
    }
  }
`
