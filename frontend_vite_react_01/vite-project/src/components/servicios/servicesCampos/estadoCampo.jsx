import { useContext } from 'react';
import { ServiceContext } from '../../../contexts/serviceContext'
import FormsComponentsStyle from '../servicesComponentesStyle/formsComponentsStyle';
const EstadoCampo = () => {
    const {serviceData, handleChange, currentOption,isRegisterService} = useContext(ServiceContext);
    const {
        labelClassname,
        selectDesing,
        divEspace,
    } = FormsComponentsStyle;

    return (
        <>
        {currentOption !== 'register' && (
            <div className={divEspace}>
                <label className={labelClassname} htmlFor="estado">
                Estado:
                </label>
                <select
                className={selectDesing}
                id="estado"
                name="estado"
                value={serviceData.estado}
                onChange={handleChange}
                disabled={currentOption === 'show' || isRegisterService }
                required
                >
                <option value="0">Inactivo</option>
                <option value="1">Activo</option>
                </select>
            </div>
        )}
        </>
    );
}

export default EstadoCampo;