import Slider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = ({ images }) => {
  const settings = {
    centerMode: true,
    centerPadding:'0px',
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
   
    
  };

  return (
    <div className="carousel-container justify-center">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className=' flex'>
            <img src={image} alt={`Slide ${index + 1}`} 
            className="h-1/10 w-1/4 "/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
}

export default ImageCarousel;
