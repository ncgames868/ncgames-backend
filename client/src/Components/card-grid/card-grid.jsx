import { Card } from "../card/card";
import { CardGridContainer, CardGridSlideshow, CardGridTitle } from "./styles";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CardGrid = ({ title, games }) => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

  return (
    <CardGridContainer>

      <CardGridTitle>{title}</CardGridTitle>
        <CardGridSlideshow>
      <Slider {...settings}>
          {games.map((item) => (
            <Card key={item.id}
              title={item.name}
              price={item.price}
              img={item.background_image}
            />
          ))}
      </Slider>
        </CardGridSlideshow>
    </CardGridContainer>
  );
};
