import { useEffect } from 'react';
import FormsComponentsStyle from '../servicesComponentesStyle/formsComponentsStyle';
import SuccessMessage from '../../../components/mensajesAuxliliares/successRegister';
import { updateService, createService } from '../../../api/servicesApi';
import { useContext } from 'react';
import { ServiceContext } from '../../../contexts/serviceContext'
import CamposBase from '../servicesCampos/estadoCampo';
import BotonEditar from '../servicesCampos/botonEditar';
import NombreCampo from '../servicesCampos/nombreCampo';
import DescripcionCampo from '../servicesCampos/descripcionCampo';
import VehiculoCampo from '../servicesCampos/vehiculoCampo';
import HorarioCampo from '../servicesCampos/horarioCampo';
import BotonSubmit from '../servicesCampos/botonSubmit';
import BotonCancelar from '../servicesCampos/botonCancelar';


const TransportServiceForm3 = () =>{
    const {serviceData,isUpdated, setIsUpdated,
         currentOption,setCurrentOption, fetchData,horarios,setIsSuccessModalOpen,
         isSuccessModalOpen,openSuccessModal} = useContext(ServiceContext);

    const handleUpdateService = async () => {
        try {
          if (currentOption === 'register') {
            const updatedServiceData = {
                ...serviceData,
                tipo_servicio: "Servicio de transporte",
            }; 
            createService(updatedServiceData);
            openSuccessModal();

          } else if (currentOption === 'edit') {
            const updatedServiceData = {
                ...serviceData,
                horarios: horarios,
            }; 
            updateService(updatedServiceData);
            setIsUpdated(true);
            setCurrentOption('show');
          }
        } catch (error) {
          console.error('Error al actualizar/registrar el servicio:', error);
        }
    };
      
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Esto es lo que se va a guardar',serviceData);
        handleUpdateService();
    }; 
    
    useEffect(() => {
        if (currentOption === 'show'&& isUpdated) {
            fetchData(serviceData._id);
            setIsUpdated(false);}

        else if (currentOption === 'register') {
            console.log('Data en register:', serviceData);

        }
    }, [currentOption, isUpdated, fetchData, serviceData, setIsUpdated]);

    const {
        divDesing,
        divEspace,
        tituloServicio,
        contenedor,
    } = FormsComponentsStyle;

  return (

    <div className={contenedor}>
        <form  onSubmit={handleSubmit}>
        
            <div className={divDesing}>
                <BotonCancelar />
                <BotonEditar />
                <div className={divEspace}>
                    <h1 className={tituloServicio}> {currentOption=== 'edit' ? 'Editar servicio de transporte' : 'Registrar servicio de transporte'} </h1>
                </div>
                <NombreCampo />
                <CamposBase />
                <DescripcionCampo />
                <VehiculoCampo />
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


export default TransportServiceForm3;