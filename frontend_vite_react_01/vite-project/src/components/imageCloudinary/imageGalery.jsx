// ImageGallery.js
import { useState, useEffect } from 'react';
import { obtenerImagenesPorServicio, eliminarImagen } from '../../api/cloudinaryApi';
import axios from 'axios';

const ImageGallery = ({ servicioId }) => {
  const [images, setImages] = useState([]);
  const [seEliminoImagen, setSeEliminoImagen] = useState(false);

  const [selectedImages, setSelectedImages] = useState([]);

  const handleSelectImage = (image) => {
    // Agregar o quitar imágenes de la selección
    if (selectedImages.includes(image)) {
      setSelectedImages(selectedImages.filter((selected) => selected !== image));
    } else {
      setSelectedImages([...selectedImages, image]);
    }
  };

  const handleDeleteImage = (imageId) => {
      eliminarImagen(imageId);
      setSeEliminoImagen(true);
     


  };
  const getImages = async (servicioId) => {
    try {
      const imagenes = await obtenerImagenesPorServicio(servicioId);
      setImages(imagenes);
      return imagenes; // Devuelve todos los datos del usuario
    } catch (error) {
      console.error('Error al obtener las imagenes del servicio:', error);
      return null; // Devuelve null en caso de error
    }
  };

  useEffect(() => {
    if(seEliminoImagen){
      getImages('64e5a8c6fa70daf3b629510f');}
      setSeEliminoImagen(false);

    console.log('Se elimino',seEliminoImagen)

    getImages('64e5a8c6fa70daf3b629510f');

  }, [servicioId, seEliminoImagen]);

  // Resto del código para mostrar las imágenes y gestionar la selección y eliminación
  return (
    <div className='bg-red-200'>
      <h1>Imagenes</h1>
      {images.map((image) => (
        <div key={image._id}>
          <img src={image.url} alt="Imagen del servicio" />
          <button onClick={() => handleSelectImage(image)}>Seleccionar</button>
          <button onClick={() => handleDeleteImage(image._id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
