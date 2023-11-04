import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ImagenesUrl from '../../../src/images/imagenesUrl';
import DeleteConfirmation from '../mensajesAuxliliares/deleteConfirmation'
import { FaTrash,FaPen } from 'react-icons/fa';
import SubirImagenModal from '../mensajesAuxliliares/subirImagenModal';
const CardServiceModify = ({services, onDeleteService, fetchData}) => {
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [serviceToDelete, setServiceToDelete] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [serviceForImage, setServiceForImage] = useState(null);
    
    const {
      urlTransporte,
      urlHabitaciones,
      urlAsesorias,
      urlOtrosServicios,
      
  } = ImagenesUrl;
    const handleCambiarPortada = (serviceId) => {
      setServiceForImage(serviceId);
      setModalOpen(true);
    };
    
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
            
                {service.imagenPortada && service.imagenPortada.url ? (
                  <img
                    className="lg:h-48 md:h-36 h-36 w-full object-cover object-center"
                    src={service.imagenPortada.url}
                    alt={service._id}
                    loading="lazy"
                  />
                ) : (
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
                )}

               <div className='absolute top-4 right-4'>
                    <Link to={{ pathname: `/editService/${service._id}` }}>
                                    <button className={'focus:outline-none border-2 border-white bg-indigo-500 text-white hover:bg-indigo-600 py-2 px-4 rounded-full'}
                                    ><FaPen/></button>
                                </Link>
                    {/* Botón Eliminar */}
                    <button className={'focus:outline-none border-2 border-white bg-red-500 text-white hover:bg-red-600 py-2 px-4 rounded-full '}
                    onClick={() => handleDeleteClick(service._id)}><FaTrash /> </button>

               </div>
               <div className='absolute top-24 md:top-36 left-4'>
                    <button className={'focus:outline-none bg-gray-800 text-xs border border-white text-gray-100 hover:bg-gray-900 py-1 px-2 rounded-full '}
                      onClick={() => handleCambiarPortada(service._id)}>Cambiar portada</button>
                    {/* Modal para Subir Imagen */}
                    <SubirImagenModal
                      isOpen={modalOpen}
                      onClose={() => setModalOpen(false)}
                      serviceId={serviceForImage}
                      fetchData={fetchData}
                    />
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
                        <Link to={{ pathname: `/serviceDetails/${service._id}` }} className="text-indigo-500 font-semibold underline inline-flex items-center cursor-pointer md:mb-2 lg:mb-0">
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
  onDeleteService: PropTypes.func.isRequired,
  fetchData: PropTypes.func
}

export default CardServiceModify;
