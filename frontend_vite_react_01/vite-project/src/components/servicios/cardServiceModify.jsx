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
            <div key={service._id} className="p-4 md:w-1/3  w-full relative">
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
