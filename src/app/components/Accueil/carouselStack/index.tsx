/*import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import './style.scss';
import { dot } from 'node:test/reporters';
//import 'slick-carousel/slick/slick.css';
//import 'slick-carousel/slick/slick-theme.css';


interface CarouselProps {
  imagesStack: string[];
}

export const CarouselStack: React.FC<CarouselProps> = ({ imagesStack }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    initialSlide: 0,
    cssEase: 'linear',
    //dotsClass: 'carouselBessanBouton',
    appendDots: (dots: any) => (
        <div className="carouselAccueilWrapper">
          <ul className='carouselAccueilBouton'>{dots}</ul>
        </div>
      ),
  };

  return (

    <Slider className='carouselAccueilMain' {...settings}>
      {imagesStack.map((image, index) => (
        <div  key={index}>
            <div className='carouselAccueilWrapper'>
         <Image className='carouselleAccueilImage'priority={true} src={image} alt={`Slide ${index}`}  width={0}
  height={0}
  sizes="100vw"
  style={{ width: 'auto', height: '30rem' }} 
      />
  </div>
        </div>
      ))}
    </Slider>
  );
};*/
