import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 90%;
  max-width: 300px;
  aspect-ratio: 3/4;
  background: #555;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`
export const CardTop = styled.div`
  position: relative;
  height: 70%;
  width: 100%;
  img {
    border-radius: 20px 20px 0 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`
export const CardBottom = styled.div`
  height: 30%;
`

export const CardTitle = styled.p`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 25px;
  @media (max-width: 768px) {
    font-size: 21px;
  }
  @media (max-width: 460px) {
    font-size: 16px;
  }
`

export const CardPrice = styled.p`
  position: absolute;
  right: 0;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  border-radius: 0 15px 0 15px;
  display: flex;
  align-items: center;
  background-color: yellow;
  color: black;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 460px) {
    font-size: 12px;
  }
`