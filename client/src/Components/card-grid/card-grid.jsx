import { Card } from '../card/card'
import { CardGridContainer, CardGridSlideshow, CardGridTitle } from './styles'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const CardGrid = ({ title, games }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true
        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3
        }
      },
      {
        breakpoint: 759,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ],
  }

  return (
    <CardGridContainer>
      <CardGridTitle>{title}</CardGridTitle>
      <CardGridSlideshow>
        <Slider {...settings}>
          {games.map((item) => (
            <Card
              key={item.id}
              title={item.name}
              price={item.price}
              img={item.background_image}
            />
          ))}
        </Slider>
      </CardGridSlideshow>
    </CardGridContainer>
  )
}
