import {
  CardContainer,
  CardBottom,
  CardPrice,
  CardTitle,
  CardTop,
} from "./styles";

export const Card = ({ title, price, img }) => {
  return (
    <CardContainer>
      <CardTop>
        <CardPrice>${price}</CardPrice>
        <img src={img} alt=''/>
      </CardTop>
      <CardBottom>
        <CardTitle>{title}</CardTitle>
      </CardBottom>
    </CardContainer>
  );
};
