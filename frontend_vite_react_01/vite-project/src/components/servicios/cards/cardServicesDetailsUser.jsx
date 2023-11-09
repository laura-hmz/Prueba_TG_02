import PropTypes from 'prop-types';
import { useContext} from 'react';
import { Link } from 'react-router-dom';
import {deleteServiceSaved2, createServiceSaved} from '../../../api/savedServicesApi';
import { CardServiceContext } from '../../../contexts/cardServiceContext';
import { UserContext } from '../../../contexts/userContext';
import ImagenesUrl from '../../../../src/images/imagenesUrl';
const CardServicesDetailsUser = () => {
  const {servicesUserDetails,setSavedServiceIds, savedServiceIds } = useContext(CardServiceContext);
  const { userData } = useContext(UserContext);
  const {
    urlTransporte,
    urlHabitaciones,
    urlAsesorias,
    urlOtrosServicios,
    
} = ImagenesUrl;
 
  const handleClick = (serviceId) => {
    // Verifica si el servicio ya está guardado
    if (savedServiceIds.has(serviceId)) {
      // Si ya está guardado, elimínalo del conjunto
      savedServiceIds.delete(serviceId);
      deleteServiceSaved2(userData._id, serviceId);
  
    } else {
      // Si no está guardado, agrégalo al conjunto
      savedServiceIds.add(serviceId);
      const savedServiceData = {
        id_usuario: userData._id,
        id_servicio: serviceId,
      };
      createServiceSaved(savedServiceData);
    }
    // Actualiza el estado local con el conjunto actualizado
    setSavedServiceIds(new Set(savedServiceIds));
  };

  return (
    <section className="antialiased  font-sans">
      <div className="container px-7 py-9 mx-auto">
        <div className="flex flex-wrap -m-3 relative">
          {Array.isArray(servicesUserDetails) && servicesUserDetails.map((service) => (
            <div key={service._id} className="p-4 md:w-1/3 w-full relative">
              <div className="bg-white shadow-xl rounded-lg overflow-hidden relative">
              {service.imagenPortada && service.imagenPortada.url ? (
                <Link to={{ pathname: `/serviceDetails/${service._id}` }}>
                  <img
                    className="lg:h-48 md:h-36 h-36 w-full object-cover object-center"
                    src={service.imagenPortada.url}
                    alt={service._id}
                    loading="lazy"
                  />
                </Link>
                ) : (
                  <Link to={{ pathname: `/serviceDetails/${service._id}` }}>
                    <img
                      className="lg:h-48 md:h-36 h-36 w-full object-cover object-center"
                      src={
                        service.tipo_servicio === 'Servicio de transporte'
                          ? urlTransporte
                          : service.tipo_servicio === 'Servicio de habitaciones'
                          ? urlHabitaciones
                          : service.tipo_servicio === 'Asesorías Académicas'
                          ? urlAsesorias
                          : urlOtrosServicios
                      }
                      alt={service._id}
                      loading="lazy"
                    />
                  </Link>
                )}
                
                <button
                  className={`absolute top-4 right-4 px-3 py-1 border-2 border-white rounded focus:outline-none ${
                    savedServiceIds.has(service._id)
                      ? 'bg-gray-400 text-gray-600'
                      : 'bg-[#f0434f] text-white hover:bg-[#ba162d]'
                  }`}
                  onClick={() => handleClick(service._id)}
                  style={{ zIndex: 2 }}
                >
                  {savedServiceIds.has(service._id) ? '¡Guardado!' : 'Guardar'}
                </button>
                <div className="p-6">
                  <h2 className="tracking-widest  uppercase text-xs title-font font-medium text-gray-400 mb-1">
                    {service.tipo_servicio}
                  </h2>
                  <h1 className="title-font text-xl uppercase truncate md:text-xl  overflow-hidden font-medium text-gray-700 mb-1">
                    {service.nombre}
                  </h1>
                  <p className="text-xl text-gray-900 mb-1">$ {service.precio} COP</p>
                  <div className="h-16 md:h-16">
                    <p className="text-lg text-gray-800 overflow-hidden md:text-lg">
                      <span className="line-clamp-2">
                        {service.descripcion || 'Descripción vacía'}
                      </span>
                    </p>
                  </div>
                  
                  <div className="flex pb-4 items-center flex-wrap">
                  <Link to={{ pathname: `/serviceDetails/${service._id}` }} className="text-indigo-500 font-semibold underline inline-flex items-center cursor-pointer md:mb-2 lg:mb-0">
                        Más información
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                  </div>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
};
CardServicesDetailsUser.propTypes = {
  services: PropTypes.array
}

export default CardServicesDetailsUser;
