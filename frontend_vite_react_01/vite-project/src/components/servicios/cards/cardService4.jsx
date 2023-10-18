import PropTypes from 'prop-types';
import { useContext} from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import {deleteServiceSaved2, createServiceSaved} from '../../../api/savedServicesApi';
import { CardServiceContext } from '../../../contexts/cardServiceContext';
import { UserContext } from '../../../contexts/userContext';
const CardService4 = () => {
  const {services, userDetails,setSavedServiceIds, savedServiceIds } = useContext(CardServiceContext);
  const { userData } = useContext(UserContext);
 
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
          {Array.isArray(services) && services.map((service) => (
            <div key={service._id} className="p-4 md:w-1/3 w-full relative">
              <div className="bg-white shadow-xl rounded-lg overflow-hidden relative">
                {service.tipo_servicio === 'Servicio de transporte' ? 
                    <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={"https://img.freepik.com/free-photo/taxi-car-smartphone-with-reminder-popup-bell-notification-alert-bubble-chat-online-transportation-service-concept-web-banner-cartoon-icon-symbol-background-3d-illustration_56104-1995.jpg?w=740&t=st=1696590613~exp=1696591213~hmac=2b3b6902a893a0ad2029fbcb520b23052e0f2531802438457ea2edaec7baa04a"}
                        alt={service._id}
                    />
                : service.tipo_servicio === 'Servicio de habitaciones' ?
                    <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={"https://img.freepik.com/foto-gratis/vista-modelo-casa-3d_23-2150761062.jpg?w=740&t=st=1697606643~exp=1697607243~hmac=e15ed78a73552e93e0b617b94ec61d78dbfa1357d45d0204a826906c8a32c5e5"}
                        alt={service._id}
                    /> 
                : service.tipo_servicio === 'Asesorías Académicas' ?
                    <img
                            className="lg:h-48 md:h-36 w-full object-cover object-center"
                            src={"https://img.freepik.com/psd-gratis/representacion-3d-naturaleza-muerta-telefono_23-2150425344.jpg?w=740&t=st=1697607616~exp=1697608216~hmac=b48370e6d111dc052189f1cb74fafc8027a209efdfa7ae6a96a51b4e0e320f6f"}
                            alt={service._id}
                        /> 
                :   <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={"https://img.freepik.com/foto-gratis/ilustracion-3d-telefono-inteligente-scooter-entrega-cajas-bolsas-papel_58466-14576.jpg?w=740&t=st=1697607462~exp=1697608062~hmac=f9c4be1e62389c35e5e0b16092d968d1641840572e03bec795123aff3b3109c9"}
                        alt={service._id}
                    />  
                }
                
                <button
                  className={`absolute top-4 right-4 px-3 py-1 rounded focus:outline-none ${
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
                  <h1 className="title-font text-xl capitalize truncate md:text-xl  overflow-hidden font-medium text-gray-700 mb-1">
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
                  <Link to={{ pathname: `/serviceDetails/${service._id}` }} className="text-indigo-500 inline-flex items-center cursor-pointer md:mb-2 lg:mb-0">
                        Más información
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                  </div>
                  <div className="pt-3 pb-4 border-t border-gray-300">
                    <div className="text-xs font-bold tracking-widest text-gray-400">
                      CONTACTO
                    </div>
                    <div className="flex items-center pt-2">
                      <div
                        className="bg-cover bg-center  rounded-full mr-3"
                        
                      >
                        <FaUserCircle className="text-4xl"/> 
                      </div>
                      <div>
                        <p className="text-m font-bold text-gray-600">
                        {userDetails[service._id]?.nombre || 'Nombre Desconocido'}
                        

                        </p>
                        <p className="text-sm text-gray-700">
                          {userDetails[service._id]?.telefono || 'Teléfono desconocido'}
                        </p>
                      </div>
                    </div>
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
CardService4.propTypes = {
  services: PropTypes.array
}

export default CardService4;
