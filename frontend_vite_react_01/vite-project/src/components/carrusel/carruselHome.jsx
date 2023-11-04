import Slider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const CarruselHome = ({ banners }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 7000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true, 
        autoplaySpeed: 1000,
        draggable: false,
        pauseOnHover: false, 
        
      };

  return (
    <div className="banner-carousel mb-10 md:w-full  mx-auto justify-center ">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index}>
            <img
              src={banner.url}
              alt={`Banner ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

CarruselHome.propTypes = {
  banners: PropTypes.arrayOf(PropTypes.object).isRequired,
  };
export default CarruselHome;
