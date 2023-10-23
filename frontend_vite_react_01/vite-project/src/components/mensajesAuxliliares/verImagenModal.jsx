import { Modal } from 'react-responsive-modal';
import "./styleModal.css";
import PropTypes from 'prop-types';

const VerImagenModal = ({ isOpen, onClose, selectedImage }) => {
  return (
    <Modal open={isOpen} onClose={onClose} center>
      {selectedImage && (
        <div>
          <img src={selectedImage.url} alt="Imagen del servicio" className="w-full" />
        </div>
      )}
    </Modal>
  );
};
VerImagenModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    selectedImage: PropTypes.object,
  };
export default VerImagenModal;
