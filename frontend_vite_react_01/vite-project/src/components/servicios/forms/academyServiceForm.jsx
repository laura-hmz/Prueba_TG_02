import { useEffect } from 'react';
import FormsComponentsStyle from '../servicesComponentesStyle/formsComponentsStyle';
import SuccessMessage from '../../../components/mensajesAuxliliares/successRegister';
import { updateService, createService } from '../../../api/servicesApi';
import { useContext } from 'react';
import { ServiceContext } from '../../../contexts/serviceContext'
import EstadoCampo from '../servicesCampos/estadoCampo';
import BotonEditar from '../servicesCampos/botonEditar';
import DescripcionCampo from '../servicesCampos/descripcionCampo';
import HorarioCampo from '../servicesCampos/horarioCampo';
import BotonSubmit from '../servicesCampos/botonSubmit';
import BotonCancelar from '../servicesCampos/botonCancelar';
import Precio from '../servicesCampos/precioCampo';


const AcademyServiceForm = () =>{
    
    const {serviceData,isUpdated, setIsUpdated,
        currentOption,setCurrentOption, fetchData,horarios,setIsSuccessModalOpen,
        isSuccessModalOpen,openSuccessModal,handleChange} = useContext(ServiceContext);

   const handleUpdateService = async () => {
       try {
         if (currentOption === 'register') {
           const updatedServiceData = {
               ...serviceData,
               tipo_servicio: "Asesorías Académicas",
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
                    <h1 className={tituloServicio}> {currentOption=== 'edit' ? 'Editar asesoría académica' : currentOption=== 'register'?'Registrar asesoría académica':'Asesoria académica'} </h1>
                    <label className={labelClassname} htmlFor="nombre">Nombre de la matéria:</label>
                      <input
                        className={inputDesing}
                        type="text"
                        placeholder="Ejemplo: Calculo II"
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

                <DescripcionCampo />

                <div className={divEspace}>
                <label className={labelClassname} htmlFor="area_0">Área:</label>
                    <select
                        className={selectDesing}
                        id="area_0"
                        name="area_0"
                        value={serviceData.area_0 || ''}
                        onChange={handleChange}
                        disabled={currentOption === 'show'}
                        required
                    >
                        <option value="">----</option>
                        <option value="Ingenieria de sistemas">Ingeniería de sistemas</option>
                        <option value="Administracion de empresas">Administración de empresas</option>
                        <option value="Ingenieria de alimentos">Ingeniería de alimentos</option>
                        <option value="Construccion">Construcción</option>
                        <option value="Trabajo social">Trabajo social</option>
                        <option value="Contaduria publica">Contaduría pública</option>
                        <option value="Tecnologia en desarrollo de software">Tecnología en desarrollo de software</option>
                        <option value="Tecnologia en electronica">Tecnología en electrónica</option>
                        <option value="Tecnologia en alimentos">Tecnología en alimentos</option>
                    </select>
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

export default AcademyServiceForm;