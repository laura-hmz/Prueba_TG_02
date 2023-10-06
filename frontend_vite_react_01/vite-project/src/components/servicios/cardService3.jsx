import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import {getUserId} from '../../api/usersApi';
const CardService3 = ({services}) => {

    //Ordenar la logica del boton
  const [savedServiceIds, setSavedServiceIds] = useState(new Set());
  const [userDetails, setUserDetails] = useState({});
  
  useEffect(() => {
    // Función para obtener los datos de un usuario por su ID
    const getUser = async (id) => {
      try {
        const userData = await getUserId(id);
        return userData; // Devuelve todos los datos del usuario
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
        return null; // Devuelve null en caso de error
      }
    };
  
    // Verifica si services es un arreglo antes de intentar iterarlo
    if (Array.isArray(services)) {
      // Obtiene y almacena los datos de usuario para cada servicio
      const fetchUserDetails = async () => {
        const userDetails = {};
        for (const service of services) {
          const userData = await getUser(service.id_usuario);
          userDetails[service._id] = userData;
        }
        setUserDetails(userDetails); // Almacena los detalles del usuario
      };
  
      fetchUserDetails(); // Llama a la función para obtener los detalles del usuario
    }
  }, [services]);
  
  
  const handleClick = (serviceId) => {
    // Verifica si el servicio ya está guardado
    if (savedServiceIds.has(serviceId)) {
      // Si ya está guardado, elimínalo del conjunto
      savedServiceIds.delete(serviceId);
    } else {
      // Si no está guardado, agrégalo al conjunto
      savedServiceIds.add(serviceId);
    }

    // Actualiza el estado local con el conjunto actualizado
    setSavedServiceIds(new Set(savedServiceIds));
    console.log(savedServiceIds);
  };

  return (
    <section className="antialiased  font-sans">
      <div className="container px-7 py-9 mx-auto">
        <div className="flex flex-wrap -m-3 relative">
          {Array.isArray(services) && services.map((service) => (
            <div key={service._id} className="p-4 md:w-1/3 relative">
              <div className="bg-white shadow-xl rounded-lg overflow-hidden relative">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={"https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"}
                  alt={service._id}
                />
                <button
                  className={`absolute top-4 right-4 px-3 py-1 rounded focus:outline-none ${
                    savedServiceIds.has(service._id)
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                      : 'bg-indigo-500 text-white hover:bg-indigo-600'
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
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {service.nombre}
                  </h1>
                  <p className="text-xl text-gray-900 mb-3">$3000 COP</p>
                  <p className="leading-relaxed mb-3">{service.descripcion}</p>
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
                          3217223465
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
CardService3.propTypes = {
  services: PropTypes.array
}

export default CardService3;
