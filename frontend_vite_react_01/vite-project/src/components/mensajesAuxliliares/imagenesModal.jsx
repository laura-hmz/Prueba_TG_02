import { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import PropTypes from 'prop-types';
import { FaArrowLeft , FaArrowRight} from 'react-icons/fa'

const ImagenesModal = ({ isOpen, onClose, images, initialImageIndex }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialImageIndex);

  const navigateImage = (step) => {
    const newIndex = currentImageIndex + step;
    if (newIndex >= 0 && newIndex < images.length) {
      setCurrentImageIndex(newIndex);
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose} center>
      {images.length > 0 && (
        <div>
          <img src={images[currentImageIndex].url} alt="Imagen del servicio" className="w-full max-h-screen" />
        </div>
      )}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => navigateImage(-1)}
          disabled={currentImageIndex === 0}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          <FaArrowLeft/>
        </button>
        <button
          onClick={() => navigateImage(1)}
          disabled={currentImageIndex === images.length - 1}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          <FaArrowRight/>
        </button>
      </div>
    </Modal>
  );
};

ImagenesModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
  initialImageIndex: PropTypes.number,
};

export default ImagenesModal;
