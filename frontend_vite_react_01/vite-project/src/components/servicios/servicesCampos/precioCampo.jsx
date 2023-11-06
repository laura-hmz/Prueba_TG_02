import { useContext } from 'react';
import { ServiceContext } from '../../../contexts/serviceContext'
import FormsComponentsStyle from '../servicesComponentesStyle/formsComponentsStyle';
const Precio = () => {
    const {serviceData, handleChange, currentOption,isRegisterService} = useContext(ServiceContext);
    const {
        labelClassname,
        inputDesing,
        divEspace,
    } = FormsComponentsStyle;
    return (
        <>
            <div className={divEspace}>
                <label className={labelClassname} htmlFor="precio">Precio:</label>
                <input
                    className={inputDesing}
                    type="number"
                    placeholder="Ingresa el precio del servicio" 
                    id="precio"
                    name="precio"
                    value={serviceData.precio || ''}
                    onChange={handleChange}
                    min="0" 
                    required
                    disabled={currentOption=== 'show' || isRegisterService}
                            
                  />
            </div>
        </>
    )
}
export default Precio