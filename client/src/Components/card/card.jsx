import {
  CardBottom,
  CardContainer,
  CardImg,
  CardPrice,
  CardTitle,
  CardTop,
} from "./styles";

export const Card = ({ title, price, img }) => {
  return (
    <CardContainer>
      <CardTop>
        <CardImg src={img} />
      </CardTop>
      <CardBottom>
        <CardTitle>{title}</CardTitle>
        <CardPrice>${price}</CardPrice>
      </CardBottom>
    </CardContainer>
  );
};
