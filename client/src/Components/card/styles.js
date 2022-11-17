import styled from "styled-components";

export const CardContainer = styled.div`
    width: 300px;
    height: 450px;
    background: #FFFFFF;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const CardTop = styled.div`
    height: 310px;
    width: 300px;
`

export const CardImg = styled.img`
 object-fit: cover;  
 width: 100%; 
 height: 100%;
 `

 export const CardBottom = styled.div`
 
 `
export const CardTitle = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
`

export const CardPrice = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 25px;
line-height: 30px;
display: flex;
align-items: center;
color: #000000;
`