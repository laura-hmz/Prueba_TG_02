import { useEffect } from 'react';
import FormsComponentsStyle from '../servicesComponentesStyle/formsComponentsStyle';
import SuccessMessage from '../../../components/mensajesAuxliliares/successRegister';
import { updateService, createService } from '../../../api/servicesApi';
import { useContext } from 'react';
import { ServiceContext } from '../../../contexts/serviceContext'
import EstadoCampo from '../servicesCampos/estadoCampo';
import BotonEditar from '../servicesCampos/botonEditar';
import DescripcionCampo from '../servicesCampos/descripcionCampo';
//import HorarioCampo from '../servicesCampos/horarioCampo';
import BotonSubmit from '../servicesCampos/botonSubmit';
import BotonCancelar from '../servicesCampos/botonCancelar';
import Precio from '../servicesCampos/precioCampo';


const RoomServiceForm2 = () =>{
    
    const {serviceData,isUpdated, setIsUpdated,
        currentOption,setCurrentOption, fetchData,horarios,setIsSuccessModalOpen,
        isSuccessModalOpen,openSuccessModal,handleChange} = useContext(ServiceContext);

   const handleUpdateService = async () => {
       try {
         if (currentOption === 'register') {
           const updatedServiceData = {
               ...serviceData,
               tipo_servicio: "Servicio de habitaciones",
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
       //console.log('Esto es lo que se va a guardar',serviceData);
       handleUpdateService();
   }; 
   
   useEffect(() => {
       if (currentOption === 'show'&& isUpdated) {
           fetchData(serviceData._id);
           setIsUpdated(false);}

       else if (currentOption === 'register') {
           //console.log('Data en register:', serviceData);

       }
   }, [currentOption, isUpdated, fetchData, serviceData, setIsUpdated]);

   const {
       divDesing,
       divEspace,
       tituloServicio,
       contenedor,
       labelClassname,
       inputDesing,
       selectDesing
   } = FormsComponentsStyle;
    

  return (

    <div className={contenedor}>
        <form  onSubmit={handleSubmit}>
        
            <div className={divDesing}>
                <BotonCancelar />
                <BotonEditar />
                <div className={divEspace}>
                    <h1 className={tituloServicio}> {currentOption=== 'edit' ? 'Editar servicio de habitación' : currentOption=== 'register'?'Registrar servicio de habitación': 'Servicio de habitación u hospedaje'} </h1>
                    <label className={labelClassname} htmlFor="nombre">Nombre del servicio:</label>
                      <input
                        className={inputDesing}
                        type="text"
                        placeholder="Ejemplo: Arriendo apartamento en Aguaclara" 
                        id="nombre"
                        name="nombre"
                        value={serviceData.nombre || ''}
                        onChange={handleChange}
                        disabled={currentOption=== 'show'}
                        required
                        
                      />
                </div>

                <EstadoCampo />
                <Precio />

                <div className={divEspace}>
                    <label className={labelClassname} htmlFor="tipo_habitacion_1">Tipo de inmueble:</label>
                    <select
                    className={selectDesing}
                    id="tipo_habitacion_1"
                    name="tipo_habitacion_1"
                    value={serviceData.tipo_habitacion_1}
                    onChange={handleChange}
                    disabled={currentOption === 'show'}
                    required
                    >
                    <option value="">----</option> 
                    <option value="Apartamento">Apartamento</option>
                    <option value="Habitacion">Habitación</option>
                    <option value="Hospedaje">Hospedaje</option>
                    <option value="Roomie">Roomie</option>
                </select>

                </div>

                <DescripcionCampo />
               
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


export default RoomServiceForm2;