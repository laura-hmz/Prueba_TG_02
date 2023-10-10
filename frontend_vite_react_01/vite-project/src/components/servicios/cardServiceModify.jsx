import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteConfirmation from '../mensajesAuxliliares/deleteConfirmation'
import { FaTrash, FaPlus,FaPen } from 'react-icons/fa';
const CardServiceModify = ({services, onDeleteService}) => {
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [serviceToDelete, setServiceToDelete] = useState(null);

    const handleDeleteClick = (serviceId) => {
        setServiceToDelete(serviceId);
        setShowDeleteConfirmation(true);
    };

    const handleConfirmDelete = () => {
        if (serviceToDelete) {
            // Llama a la función onDeleteService para eliminar el servicio
            onDeleteService(serviceToDelete);
            // Cierra la ventana emergente de confirmación
            setShowDeleteConfirmation(false);
            // Restablece el valor de serviceToDelete
            setServiceToDelete(null);
        }
    }

  return (
    <section className="antialiased  font-sans">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4 relative">
          {Array.isArray(services) && services.map((service) => (
            <div key={service._id} className="p-4 md:w-1/3 relative">
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
                        src={"https://img.freepik.com/free-psd/3d-rendering-parts-house_23-2150123666.jpg?w=740&t=st=1696591308~exp=1696591908~hmac=86327bd17f8cef0b2be7996d4fb4d6dd2fbde2c1dafc993d72074995d90239e8"}
                        alt={service._id}
                    /> 
                : service.tipo_servicio === 'Asesorías Académicas' ?
                    <img
                            className="lg:h-48 md:h-36 w-full object-cover object-center"
                            src={"https://img.freepik.com/free-psd/education-concept-with-supplies_23-2149935204.jpg?w=740&t=st=1696591646~exp=1696592246~hmac=832ff8bef9e43f403c303430331656b1c54a6fb168a1a2ca3d7ff4b3b76f466c"}
                            alt={service._id}
                        /> 
                :   <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={"https://img.freepik.com/free-psd/3d-rendering-shopping-concept_23-2149877674.jpg?w=740&t=st=1696592116~exp=1696592716~hmac=ba9f556c80553885a386028e154119086218114aa44b97c21ec2f2aa664aaa4c"}
                        alt={service._id}
                    />  
                }
               <div className='absolute top-4 right-4'>
                    <Link to={{ pathname: `/editService/${service._id}` }}>
                                    <button className={'focus:outline-none bg-indigo-500 text-white hover:bg-indigo-600 py-2 px-4 rounded-full'}
                                    ><FaPen/></button>
                                </Link>
                    {/* Botón Eliminar */}
                    <button className={'focus:outline-none bg-red-500 text-white hover:bg-red-600 py-2 px-4 rounded-full '}
                    onClick={() => handleDeleteClick(service._id)}><FaTrash /> </button>

               </div>

                <div className="p-6">
                  <h2 className="tracking-widest  uppercase text-xs title-font font-medium text-gray-400 mb-1">
                    {service.tipo_servicio}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {service.nombre}
                  </h1>
                  <p className="text-xl text-gray-900 mb-3"> $ {service.precio} COP</p>
                  <p className="leading-relaxed mb-3">{service.descripcion}</p>
                  <div className="text-xs font-bold tracking-widest text-gray-400 mb-3">
                    Ultima vez actualizado: {service.updatedAt}
                  </div>
                  <div className="flex pb-4 items-center flex-wrap">
                        <Link to={{ pathname: `/serviceDetails/${service._id}` }} className="text-indigo-500 inline-flex items-center cursor-pointer md:mb-2 lg:mb-0">
                                Vista previa
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
      {/* Mostrar el componente de confirmación de eliminación si showDeleteConfirmation es true */}
      {showDeleteConfirmation && (
                <DeleteConfirmation
                    isOpen={showDeleteConfirmation}
                    onClose={() => setShowDeleteConfirmation(false)}
                    onDelete={handleConfirmDelete}
                />
            )}
    </section>
  );
  
};

CardServiceModify.propTypes = {
  services: PropTypes.array.isRequired,
  onDeleteService: PropTypes.func.isRequired
}

export default CardServiceModify;
