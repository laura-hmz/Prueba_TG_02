import { useState } from 'react';
const CardServiceOnly = ({service}) => {
    //const {service} = useParams();
    //Ordenar la logica del boton
    const [buttonClicked, setButtonClicked] = useState(false);
    

  const handleClick = () => {
    // Puedes agregar tu lógica aquí.

    // Deshabilita el botón después de hacer clic.
    setButtonClicked(true);
  };

  return (
    <section className="antialiased bg-gray-200 font-sans">
      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-wrap -m-4 relative justify-center">
        
            <div key={service._id} className="  p-4 md:w-2/3 relative">
              <div className="bg-white  shadow-xl rounded-lg overflow-hidden relative">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={"https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"}
                  alt={service._id}
                />
                <button
                  className={`absolute top-4 right-4 px-3 py-1 rounded focus:outline-none ${
                    buttonClicked
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                      : 'bg-indigo-500 text-white hover:bg-indigo-600'
                  }`}
                  onClick={handleClick}
                  disabled={buttonClicked}
                  style={{ zIndex: 2 }}
                >
                  {buttonClicked ? '¡Guardado!' : 'Guardar'}
                </button>
                <div className="p-6 ml-6 mr-6">
                  <h2 className="tracking-widest uppercase text-md title-font font-medium text-gray-400 mb-1">
                    {service.tipo_servicio}
                  </h2>
                  <h1 className="text-2xl uppercase font-semibold text-gray-800 mb-3">
                    {service.nombre}
                  </h1>
                  <p className="text-3xl text-gray-900 mb-3">$3000 COP</p>
                  <h1 className="title-font text-lg font-medium text-gray-900">Estado:</h1>
                  <p className="leading-relaxed mb-3">
                    {service.estado === 1 ? "Disponible" : "No disponible"}
                  </p>

                  <h1 className="title-font text-lg font-medium text-gray-900">Descripción:</h1>
                  <p className="leading-relaxed mb-3">{service.descripcion}</p>
                  
                  {service.area_0 && (
                    <>
                      <h1 className="title-font text-lg font-medium text-gray-900">Área/campo:</h1>
                      <p className="leading-relaxed mb-3">{service.area_0}</p>
                    </>
                  )}

                  {service.area_otro_servicio_3 && (
                    <>
                      <h1 className="title-font text-lg font-medium text-gray-900">Área de servicio:</h1>
                      <p className="leading-relaxed mb-3">{service.area_otro_servicio_3}</p>
                    </>
                  )}
                  
                  <h1 className="title-font text-lg font-medium text-gray-900">Horarios:</h1>
                  <ul className='mb-3'>
                    {service.horarios && service.horarios.length > 0 ? (
                      service.horarios.map((horario) => (
                        <li key={horario._id}>
                          <p className='text-sm uppercase'>{horario.dia_semana}, de {horario.hora_de_inicio} a {horario.hora_de_finalizacion} horas</p>
        
                        </li>
                      ))
                    ) : (
                      <li className='text-sm uppercase'>No hay horarios disponibles.</li>
                    )}
                  </ul>

                  {service.caracteristicas_habitacion_1?.length > 0 && (
                    <ul className='mb-3'>
                      <h1 className="title-font text-lg font-medium text-gray-900">Características de la habitación:</h1>
                      {service.caracteristicas_habitacion_1.map((caracteristica) => (
                        <li key={caracteristica._id}>
                          <p className='text-md font-semibold text-gray-500 '>{caracteristica.nombre}</p>
                          <p className='text-md mb-3 '>{caracteristica.descripcion}</p>
                        </li>
                      ))}
                    </ul>
                  )}

                  {service.tipo_vehiculo_2 && (
                    <>
                      <h1 className="title-font text-lg font-medium text-gray-900">Tipo de vehículo:</h1>
                      <p className="leading-relaxed mb-3">{service.tipo_vehiculo_2}</p>
                    </>
                  )}

                  

                  


                  <div className="pt-3 pb-4 border-t border-gray-300">
                    <div className="text-xs font-bold tracking-widest text-gray-400">
                      CONTACTO
                    </div>
                    <div className="flex items-center pt-2">
                      <div
                        className="bg-cover bg-center w-10 h-10 rounded-full mr-3"
                        style={{
                          backgroundImage: 'url(./src/images/profileUserImage.png)',
                        }}
                      ></div>
                      <div>
                        <p className="text-m font-bold text-gray-600">
                          Miguel Angel Burro
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
        </div>
      </div>
    </section>
  );
  
};

export default CardServiceOnly;
