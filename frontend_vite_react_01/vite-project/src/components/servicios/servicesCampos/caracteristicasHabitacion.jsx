import { useContext } from 'react';
import { ServiceContext } from '../../../contexts/serviceContext'
import FormsComponentsStyle from '../servicesComponentesStyle/formsComponentsStyle';

const CaracteristicasHabitacion = () => {

    const {serviceData, handleChange, currentOption,isRegisterService} = useContext(ServiceContext);
    const {
        labelClassname,
        labelCheckBox,
        divGridSub,
        divGrid,
       

    } = FormsComponentsStyle;
    return (
        <>
        
                <h1 className={labelClassname}>¿Qué características ofrece?</h1>
                <div className={divGrid }>
                {[
                  { nombre: 'permite mascotas' },
                  { nombre: 'parqueadero carro' },
                  { nombre: 'parqueadero moto' },
                ].map((caracteristica) => (
                  <div className={divGridSub} key={caracteristica.nombre}> 
                  <label className={labelCheckBox} key={caracteristica.nombre}>
                    <input
                      type="checkbox"
                      id={caracteristica.nombre}
                      name={`caracteristicas_habitacion_1.${caracteristica.nombre}`}
                      data-label={caracteristica.nombre}
                      checked={serviceData.caracteristicas_habitacion_1.some(
                        (c) => c.nombre === caracteristica.nombre
                      )}
                      onChange={handleChange}
                      disabled={currentOption === 'show' || isRegisterService}
                    />
                    <span className="ml-2 mr-4">{caracteristica.nombre}</span>
                  </label>
                  </div>
                ))}
              </div>
          
        </>
    )
}
export default CaracteristicasHabitacion