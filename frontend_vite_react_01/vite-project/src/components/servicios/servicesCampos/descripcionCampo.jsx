import { useContext } from 'react';
import { ServiceContext } from '../../../contexts/serviceContext'
import FormsComponentsStyle from '../servicesComponentesStyle/formsComponentsStyle';
const DescripcionCampo = () => {
    const {serviceData, handleChange, currentOption,isRegisterService} = useContext(ServiceContext);
    const {
        labelClassname,
        inputDesing,
        divEspace,
    } = FormsComponentsStyle;

    return (
        <>
       <div className={divEspace}>
                    <label htmlFor="descripcion" className={labelClassname}>Descripción del servicio:</label>
                    <textarea
                        className={inputDesing}
                        type="text"
                        placeholder="Este espacio es para que complementes la información sobre el servicio"
                        id="descripcion"
                        name="descripcion"
                        value={serviceData.descripcion || ''}
                        onChange={handleChange}
                        disabled={currentOption === 'show' || isRegisterService}
                        rows={3}
                       
                    />
                </div>
        </>
    );
}

export default DescripcionCampo;