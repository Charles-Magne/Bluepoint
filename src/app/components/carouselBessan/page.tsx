import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import './style.scss';

interface CarouselProps {
  images: string[];
}

const CarouselBessan: React.FC<CarouselProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    //dotsClass: 'carouselBessanBouton',
    appendDots: (dots: any) => (
        <div className="carouselBessanWrapper">
          <ul className='carouselBessanBouton'>{dots}</ul>
        </div>
      ),
  };

  return (
    <Slider className='carouselBessanMain' {...settings}>
      {images.map((image, index) => (
        <div  key={index}>
            <div className='carouselBessanWrapper'>
          <Image className='carouselleBessanImage' src={image} alt={`Slide ${index}`}  width={0}
  height={0}
  sizes="100vw"
  style={{ width: 'auto', height: '30rem' }}  />
  </div>
        </div>
      ))}
    </Slider>
  );
};

export default CarouselBessan;
