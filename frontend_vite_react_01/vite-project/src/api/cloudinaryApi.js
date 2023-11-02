import axios from 'axios';

// const cloudinaryApi2 = axios.create({
//   baseURL: 'http://localhost:3000/api/',
//   headers: {
//     'Content-Type': 'application/json',
//   }
// })

// const cloudinaryApi3 = axios.create({
//   baseURL: 'http://localhost:3000/api/',
//   headers: {
//     'Content-Type': 'multipart/form-data',
//   }
// })

const cloudinaryApi2 = axios.create({
  baseURL: 'https://backend-services-univalle.onrender.com/api/',
  headers: {
      'Content-Type': 'application/json',
  },
})

const cloudinaryApi3 = axios.create({
  baseURL: 'https://backend-services-univalle.onrender.com/api/',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})

export const subirImagen = async (selectedFile, servicioId) => {
  try {
    //const data= await formData.FormData();
    //console.log('data Front', data);
    const formData = new FormData();
      formData.append('imagen', selectedFile);
      formData.append('servicioId', servicioId);
   
    const res = await cloudinaryApi3.post('/subir-imagen', formData);
    //console.log(res.data)
    return res.data;
  } catch (error) {
    console.error('Error al subir la imagen a Cloudinary', error);
    throw error;
  }
};

export const obtenerImagenesPorServicio = async (servicioId) => {
  try {
    const res = await cloudinaryApi2.get(`/obtener-imagenes/${servicioId}`);
    return res.data;
  } catch (error) {
    console.error('Error al obtener las imágenes del servicio', error);
    throw error;
  }
};

export const eliminarImagen = async (imagenId) => {
  try {
    const res = await cloudinaryApi2.delete(`/eliminar-imagen/${imagenId}`);
    //console.log(res.data)
    return res.data;
  } catch (error) {
    console.error('Error al eliminar la imagen', error);
    throw error;
  }
};
