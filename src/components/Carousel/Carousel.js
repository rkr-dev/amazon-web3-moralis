import React from 'react';
import { Carousel } from 'antd';
import './Carousel.css'

export const CarouselComponent = ({carousel}) => {
  return (
    <Carousel autoplay className='carousel'>
      {carousel.map((item, i) => (
        <img key={i} src={item} alt="carousel" className='carousel-img'/>
      ))}
    </Carousel>
  );
}