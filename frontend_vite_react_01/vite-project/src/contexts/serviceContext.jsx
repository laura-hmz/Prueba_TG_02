import { createContext, useState, useEffect, useContext,useCallback } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from './userContext';
import {getServicesById} from '../api/servicesApi';
import {obtenerImagenesPorServicio} from '../api/cloudinaryApi';

export const ServiceContext = createContext(null);

export const ServiceProvider = ({ children }) => {
  const { userData } = useContext(UserContext);
  const [currentOption, setCurrentOption] = useState('show');
  const [isUpdated, setIsUpdated] = useState(false);
  const [service, setService] = useState(null);
  const [tipoServicio, setTipoServicio] = useState('');
  //para las imagenes
  const [images, setImages] = useState([]);
  const [idServiceForImg, setIdServiceForImg] = useState('');

  const [serviceData, setServiceData] = useState({
    id_usuario: '', // Inicializar id_usuario como una cadena vacía
    nombre: '',
    descripcion: '',
    horarios: [],
    tipo_servicio: '', 
    estado: 1,
    area_0: '',
    tipo_habitacion_1: '',
    caracteristicas_habitacion_1: [],
    tipo_vehiculo_2: '',
    area_otro_servicio_3: '',
    precio: 0,
  });

  const resetServiceData = useCallback(() => {
    setServiceData({
      id_usuario: '',
      nombre: '',
      descripcion: '',
      horarios: [],
      tipo_servicio: '',
      estado: 1,
      area_0: '',
      tipo_habitacion_1: '',
      caracteristicas_habitacion_1: [],
      tipo_vehiculo_2: '',
      area_otro_servicio_3: '',
      precio: 0,
    });
    setHorarios([]);
    setServiceData((prevData) => ({
      ...prevData,
      id_usuario: userData._id,
    }));

  }, [setServiceData, userData]);

  const optionsHoraInicio = [
    "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00",
    "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00",
    "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
  ];
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const openSuccessModal = () => {
    setIsSuccessModalOpen(true);
  };

  const fetchData = useCallback(async (id) => {
    try {
      const data = await getServicesById(id);
      setServiceData(data);
      setTipoServicio(data.tipo_servicio);
    } catch (error) {
      console.error('Error al obtener los servicios:', error);
    }
  }, []);

  const getImages = useCallback(async (servicioId) => {
    try {
      const imagenes = await obtenerImagenesPorServicio(servicioId);
      console.log('Imagenes', imagenes);
      setImages(imagenes);
    } catch (error) {
      console.error('Error al obtener las imagenes del servicio:', error);
    }
  }, []);
  


  const handleChange= (e) => {
    const { name, value, type, checked } = e.target;
    const updatedValue = type === 'checkbox' ? checked : value;

    if (name.startsWith('caracteristicas_habitacion_1')) {
      // Si se trata de un checkbox de características
      const caracteristicNombre = name.split('.')[1];
      if (checked) {
        // Si el checkbox se marcó, agregamos el objeto a la lista
        const characteristic = {
          nombre: caracteristicNombre,
        };
        setServiceData((prevServiceData) => ({
          ...prevServiceData,
          caracteristicas_habitacion_1: [...prevServiceData.caracteristicas_habitacion_1, characteristic],
        }));
        console.log('Caracteristica agregada:', characteristic);
      } else {
        // Si el checkbox se desmarcó, lo eliminamos de la lista
        setServiceData((prevServiceData) => ({
          ...prevServiceData,
          caracteristicas_habitacion_1: prevServiceData.caracteristicas_habitacion_1.filter((c) => c.nombre !== caracteristicNombre),
        }));
        console.log('Caracteristica eliminada:', caracteristicNombre);
      }
    } else {
      // Para otros campos que no sean características
      setServiceData((prevServiceData) => ({
        ...prevServiceData,
        [name]: updatedValue,
      }));
    }

  };
  const [horarios, setHorarios] = useState([
    { dia_semana: '', hora_de_inicio: '', hora_de_finalizacion: '' } 
  ]);

  // Efecto para actualizar id_usuario cuando userData cambie
  useEffect(() => {
    if (userData) {
      setServiceData((prevData) => ({
        ...prevData,
        id_usuario: userData._id,
      }));
    }
    
  }, [userData,resetServiceData]);

  useEffect(() => {
    
  }, [serviceData]);

  const serviceContextValue = {
    serviceData,
    setServiceData,
    currentOption,
    setCurrentOption,
    isUpdated,
    setIsUpdated,
    service,
    setService,
    fetchData,
    optionsHoraInicio,
    handleChange,
    horarios,
    setHorarios,
    openSuccessModal,
    isSuccessModalOpen,
    setIsSuccessModalOpen,
    tipoServicio,
    setTipoServicio,
    resetServiceData,
    setImages,
    images,
    getImages,
    idServiceForImg,
    setIdServiceForImg

  };

  return (
    <ServiceContext.Provider value={serviceContextValue}>
      {children}
    </ServiceContext.Provider>
  );
};

ServiceProvider.propTypes = {
  children: PropTypes.node,
};
