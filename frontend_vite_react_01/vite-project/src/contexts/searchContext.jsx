import { createContext, useState, useEffect, useContext,useCallback } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from './userContext';

export const SearchContext = createContext(null);

export const SearchContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useState({
    diaSemana: 'MUAK',
    horaBusquedaInicio: '',
    horaBusquedaFinal: '',
    estado: '',
    nombre: '',
    tipo_servicio: '',
    area_0: '',
    tipo_habitacion_1: '',
    parqueadero_carro:false, 
    parqueadero_moto:false, 
    permite_mascota:false,
    tipo_vehiculo_2: '',
    area_otro_servicio_3: '',
    id_cliente: '', 
    precioMinimo: '',
    precioMaximo:'',
  });

  const optionsHora = [
    "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00",
    "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00",
    "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    if (name === 'tipo_servicio') {
      // Si cambia la categoría, establece la nueva categoría y restablece los valores de búsqueda
      setSearchParams({
        diaSemana: '',
        horaBusquedaInicio: '',
        horaBusquedaFinal: '',
        estado: '',
        nombre: '',
        area_0: '',
        tipo_habitacion_1: '',
        parqueadero_carro: false,
        parqueadero_moto: false,
        permite_mascota: false,
        tipo_vehiculo_2: '',
        area_otro_servicio_3: '',
        id_cliente: '',
        precioMinimo: '',
        precioMaximo:'',
        [name]: value,
        
      });
    } else {
      if (type === 'checkbox') {
        // Verificamos si el checkbox está marcado y asignamos el valor correspondiente
        const checkboxValue = checked ? name.replace(/_/g, ' ') : '';
        setSearchParams({
          ...searchParams,
          [name]: checkboxValue,
        });
      } else {
        setSearchParams((prevSearchParams) => ({
          ...prevSearchParams,
          [name]: value,
        }));
      }
    }
  };

  const SearchContextValue = {
    searchParams,
    setSearchParams,
    optionsHora,
    handleChange,
    isLoading,
    setIsLoading

  };

  return (
    <SearchContext.Provider value={SearchContextValue}>
      {children}
    </SearchContext.Provider>
  );
};

SearchContextProvider.propTypes = {
  children: PropTypes.node,
};
