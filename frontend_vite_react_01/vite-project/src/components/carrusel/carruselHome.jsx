import Slider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const CarruselHome = ({ banners }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true, // Habilita el autoplay
        autoplaySpeed: 3000, // Define la velocidad del autoplay en milisegundos (por ejemplo, 3000 ms = 3 segundos)
      };

  return (
    <div className="banner-carousel mb-10 md:w-8/9 mx-auto justify-center ">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index}>
            <img
              src={banner.url}
              alt={`Banner ${index + 1}`}
              className="w-full "
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
