import { useState, useEffect } from 'react';
import { eliminarImagen } from '../../api/cloudinaryApi';
import { useContext} from 'react';
import { ServiceContext } from '../../contexts/serviceContext';
import FormsComponentsStyle from '../../components/servicios/servicesComponentesStyle/formsComponentsStyle';
import { FaTrash, FaEye,FaCameraRetro } from 'react-icons/fa';
import VerImagenModal from '../mensajesAuxliliares/verImagenModal';
import DeleteConfirmationImg from '../mensajesAuxliliares/deleteConfirmationImage';

const ImageGallery = () => {
  const {images, getImages, currentOption, idServiceForImg } = useContext(ServiceContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);


  const openImageModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const handleDeleteImage = async (imageId) => {
    try {
      await eliminarImagen(imageId);
      await getImages(idServiceForImg);
      setDeleteConfirmationOpen(false);
    } catch (error) {
      console.error('Error al eliminar la imagen', error);
    }
  };

  useEffect(() => {
   
  }, [getImages]);
  
  const {
    divGrid,
    divGridSub,
} = FormsComponentsStyle;

  return (
    <>
      {currentOption !== 'register' && (
        <div className=" mx-auto ">
          
          {images.length === 0 ? ( // Verifica si no hay imágenes
            <p className="text-center text-gray-400 py-3 bg-gray-100 border-solid border">
              No tienes fotos de tu servicio, ¿Qué esperas para subirlas?
              <span className="flex justify-center mt-2 items-center">
                <FaCameraRetro size={70} className="center text-gray-400 "/>
              </span>
            </p>
              
          ) : (
            images.slice(0, 3).map((image) => (
                <div key={image._id} className={'flex bg-white p-1 rounded shadow-xl lg:mb-4 mb-2  items-center'}>
                  <div className={'flex-1  '}>
                    <div className="h-16  ">
                      <img
                        className=" h-16 w-full lg:w-full object-cover"
                        src={image.url}
                        alt="Imagen del servicio"
                      />            
                    </div>
                  </div>
              
                <div className={'flex-1 overflow-hidden ' } >
                  <div className={divGrid}>
                    <div className={divGridSub + 'overflow-hidden'}>
                      <h1 className="py-2 lg:ml-10 md:ml-6 ml-4 capitalize  truncate overflow-hidden md:text-md lg:text-md text-sm font-semibold text-center text-gray-500 mb-1">
                        {image.title || ''}
                      </h1>
                    </div>
                    <div className={divGridSub}>
                      <div className="flex justify-end items-center">
                        <button 
                          className="focus:outline-none bg-blue-500 center text-white hover:bg-blue-600 py-2 px-4 lg:m-1 md:m-1 rounded-full" 
                          type="button"
                          onClick={() => openImageModal(image)}
                          ><FaEye /></button>
                        <button 
                          className="focus:outline-none bg-red-500 disabled:bg-red-300 center text-white hover:bg-red-600 py-2 px-4 lg:m-1 md:m-1 rounded-full" 
                          type="button"
                          onClick={() => setDeleteConfirmationOpen(true)}
                          disabled={currentOption === 'show'}><FaTrash /></button>
                      </div>
                    </div>
                  </div>
                
                </div>
                <DeleteConfirmationImg 
                  isOpen={deleteConfirmationOpen} 
                  onClose={() => setDeleteConfirmationOpen(false)} 
                  onDelete={() => handleDeleteImage(image._id)}
                />
              </div>
          )))}
        <VerImagenModal isOpen={modalOpen} onClose={() => setModalOpen(false)} selectedImage={selectedImage} />
      </div>
      )}
    </>
  );
};

export default ImageGallery;
