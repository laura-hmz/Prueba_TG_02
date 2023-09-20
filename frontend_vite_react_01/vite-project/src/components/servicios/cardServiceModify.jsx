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

    //Ordenar la logica del boton
    const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    // Puedes agregar tu lógica aquí.

    // Deshabilita el botón después de hacer clic.
    setButtonClicked(true);
  };

  return (
    <section className="antialiased  font-sans">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4 relative">
          {Array.isArray(services) && services.map((service) => (
            <div key={service._id} className="p-4 md:w-1/3 relative">
              <div className="bg-white shadow-xl rounded-lg overflow-hidden relative">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={"https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"}
                  alt={service._id}
                />
               <div className='absolute top-4 right-4'>
                    <Link to={{ pathname: `/serviceDetails/${service._id}` }}>
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
                  <p className="text-xl text-gray-900 mb-3">$3000 COP</p>
                  <p className="leading-relaxed mb-3">{service.descripcion}</p>
                  <div className="text-xs font-bold tracking-widest text-gray-400 mb-3">
                    Ultima vez actualizado: {service.updatedAt}
                  </div>
                  <div className="flex pb-4 items-center flex-wrap">
                        <Link to={{ pathname: `/serviceDetails/${service._id}` }} className="text-indigo-500 inline-flex items-center cursor-pointer md:mb-2 lg:mb-0">
                                Ver detalles
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

export default CardServiceModify;
