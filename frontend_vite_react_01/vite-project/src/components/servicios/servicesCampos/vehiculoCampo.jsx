import { useContext } from 'react';
import { ServiceContext } from '../../../contexts/serviceContext'
import FormsComponentsStyle from '../servicesComponentesStyle/formsComponentsStyle';
const VehiculoCampo = () => {
    const {serviceData, handleChange, currentOption} = useContext(ServiceContext);
    const {
        labelClassname,
        selectDesing,
        divEspace,
    } = FormsComponentsStyle;

    return (
        <>
        <div className={divEspace}>
            <label className={labelClassname} htmlFor="tipo_vehiculo_2">Tipo de vehículo:</label>
            <select
                className={selectDesing}
                id="tipo_vehiculo_2"
                name="tipo_vehiculo_2"
                value={serviceData.tipo_vehiculo_2 || ''} 
                onChange={handleChange}
                disabled={currentOption === 'show'}
                required
            >
                <option value="">----</option> 
                <option value="carro">Carro</option>
                <option value="moto">Moto</option>
            </select>
        </div>
        </>
    );
}

export default VehiculoCampo;