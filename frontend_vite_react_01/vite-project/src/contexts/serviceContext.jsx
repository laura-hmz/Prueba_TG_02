import { createContext, useState, useEffect, useContext,useCallback } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from './userContext';
import {getServicesById} from '../api/servicesApi';

export const ServiceContext = createContext(null);

export const ServiceProvider = ({ children }) => {
  const { userData } = useContext(UserContext);
  const [currentOption, setCurrentOption] = useState('show');
  const [isUpdated, setIsUpdated] = useState(false);
  const [service, setService] = useState(null);
  const [tipoServicio, setTipoServicio] = useState('');
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
  const handleChange = (e) => {
    const { name, value , type, checked} = e.target;
    if (type === 'checkbox') {
      // Verificamos si el checkbox está marcado y asignamos el valor correspondiente
      const checkboxValue = checked ? name.replace(/_/g, ' ') : '';
      setServiceData({
        ...serviceData,
        [name]: checkboxValue,
      });
    } else {
      setServiceData({
        ...serviceData,
        [name]: value,
      });
    }
    setServiceData((prevServiceData) => ({
        ...prevServiceData,
        [name]: value,
      }));   
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
    resetServiceData

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
