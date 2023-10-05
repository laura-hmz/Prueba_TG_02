import { useContext } from 'react';
import { ServiceContext } from '../../../contexts/serviceContext'
import FormsComponentsStyle from '../servicesComponentesStyle/formsComponentsStyle';
const NombreCampo = () => {
    const {serviceData, handleChange, currentOption} = useContext(ServiceContext);
    const {
        labelClassname,
        inputDesing,
        divEspace,
    } = FormsComponentsStyle;

    return (
        <>
        <div className={divEspace}>
            <label className={labelClassname} htmlFor="nombre">Nombre del servicio:</label>
            <input
                className={inputDesing}
                type="text"
                placeholder="Ejemplo: Servicio de moto"
                id="nombre"
                name="nombre"
                value={serviceData.nombre || ''}
                onChange={handleChange}
                disabled={currentOption=== 'show'}
                required
                            
            />    

        </div>
       
        </>
    );
}

export default NombreCampo;