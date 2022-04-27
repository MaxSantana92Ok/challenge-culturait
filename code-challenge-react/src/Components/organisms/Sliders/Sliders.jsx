import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Sliders = ({children}) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          pauseOnHover: true,
        },
      },
    ],
  };
  return (
    <React.Fragment>
      <div className="CP-Sliders">
        <Slider {...settings}>{children}</Slider>
      </div>
    </React.Fragment>
  );
};
export default Sliders;
