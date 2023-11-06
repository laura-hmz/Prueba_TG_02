import { useEffect } from 'react';
import FormsComponentsStyle from '../servicesComponentesStyle/formsComponentsStyle';
import SuccessMessage from '../../../components/mensajesAuxliliares/successRegister';
//import { updateService, createService } from '../../../api/servicesApi';
import { useContext } from 'react';
import { ServiceContext } from '../../../contexts/serviceContext'
import PropTypes from 'prop-types';
import EstadoCampo from '../servicesCampos/estadoCampo';
import BotonEditar from '../servicesCampos/botonEditar';
import NombreCampo from '../servicesCampos/nombreCampo';
import DescripcionCampo from '../servicesCampos/descripcionCampo';
import VehiculoCampo from '../servicesCampos/vehiculoCampo';
import HorarioCampo from '../servicesCampos/horarioCampo';
import BotonSubmit from '../servicesCampos/botonSubmit';
import BotonCancelar from '../servicesCampos/botonCancelar';
import Precio from '../servicesCampos/precioCampo';
import BackButtonForms from '../../botoneNavegacion/backButtonForms';


const TransportServiceForm3 = ({option}) =>{
    const {serviceData,isUpdated, setIsUpdated,
         currentOption,setCurrentOption, fetchData,setIsSuccessModalOpen,
         isSuccessModalOpen,handleUpdateService} = useContext(ServiceContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('Esto es lo que se va a guardar',serviceData);
        handleUpdateService("Servicio de transporte");
    }; 
    
    useEffect(() => {
        if (currentOption === 'show'&& isUpdated) {
            fetchData(serviceData._id);
            setIsUpdated(false);}

            else if (option === 'register') {
              //console.log('Data en register:', serviceData);
             setCurrentOption('register');
   
          }
    }, [currentOption, isUpdated, fetchData, serviceData, setIsUpdated, setCurrentOption, option]);

    const {
        divDesing,
        divEspace,
        tituloServicio,
        contenedor,
        divGrid,
        divGridSub,
    } = FormsComponentsStyle;

  return (

    <div className={contenedor}>
        <form  onSubmit={handleSubmit}>
        
            <div className={divDesing}>
            <div className='mb-10 md:mb-0'>
              <div className={divGrid }>
                <div className={divGridSub}>
                <BackButtonForms currentOption={currentOption} />
                </div>
                <div className={divGridSub}>
                  <BotonCancelar />
                  <BotonEditar />
                </div>
              </div>
            </div>
                <div className={divEspace}>
                    <h1 className={tituloServicio}> {currentOption=== 'edit' ? 'Editar servicio de transporte' : currentOption=== 'register'?'Registrar servicio de transporte': 'Servicio de transporte'} </h1>
                </div>
                <NombreCampo />
                <EstadoCampo />
                <DescripcionCampo />
                <div className={divGrid}>
                  <div className={divGridSub}> 
                    <Precio />
                  </div>
                  <div className={divGridSub}>
                    <VehiculoCampo />
                  </div>
                </div>
                <HorarioCampo />
                <BotonSubmit />

            </div>
            <SuccessMessage
          isOpen={isSuccessModalOpen}
          onClose={() => setIsSuccessModalOpen(false)}
        />
        </form>
    </div>
  );
}
TransportServiceForm3.propTypes = {
    option: PropTypes.string
}

export default TransportServiceForm3;