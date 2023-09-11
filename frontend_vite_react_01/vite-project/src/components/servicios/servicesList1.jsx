
const ServicesList1 = ({services}) => {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
              {services.map((service) => (
                <div key={service._id} className="py-8 flex flex-wrap md:flex-nowrap">
                  {/* Renderizar los detalles del servicio */}
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-gray-700">CATEGORÍA</span>
                    <span className="mt-1 text-gray-600 text-md"> {service.tipo_servicio}</span>
                    <span className="mt-1 text-gray-500 text-sm">{service.updatedAt}</span>
                  </div>
                  <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{service.nombre}</h2>
                    <p className="leading-relaxed">{service.descripcion}</p>
                    {/* Enlace para ver detalles del servicio */}
                    <a className="text-indigo-500 inline-flex items-center mt-4 hover:text-gray-900 cursor-pointer">Detalles
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
        </div>
        </section>
    )
}
export default ServicesList1