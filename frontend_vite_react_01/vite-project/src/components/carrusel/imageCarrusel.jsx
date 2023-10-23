import Slider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImagenesModal from '../mensajesAuxliliares/imagenesModal';
import { FaEye } from 'react-icons/fa';
import { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const settings = {
    centerMode: true,
    centerPadding: '0px',
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [imageModalIsOpen, setImageModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openImageModal = (imageIndex) => {
    setSelectedImageIndex(imageIndex);
    setImageModalIsOpen(true);
  };

  const closeImageModal = () => {
    setImageModalIsOpen(false);
  };

  return (
    <div className="carousel-container justify-center">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <button
              className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 border border-gray-300 rounded cursor-pointer"
              onClick={() => openImageModal(index)}
            >
              <FaEye size={30}/>
            </button>
            <img
              src={image.url}
              alt={`Slide ${index + 1}`}
              className="lg:h-60 md:h-16 w-full h-36 mx-auto object-cover object-center"
            />
          </div>
        ))}
      </Slider>
      <ImagenesModal
        isOpen={imageModalIsOpen}
        onClose={closeImageModal}
        images={images} // Pasa el array de imágenes
        initialImageIndex={selectedImageIndex} // Pasa el índice de la imagen seleccionada
      />
    </div>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default ImageCarousel;
