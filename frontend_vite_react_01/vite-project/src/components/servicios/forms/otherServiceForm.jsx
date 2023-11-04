import { useEffect } from 'react';
import FormsComponentsStyle from '../servicesComponentesStyle/formsComponentsStyle';
import SuccessMessage from '../../../components/mensajesAuxliliares/successRegister';
import { updateService, createService } from '../../../api/servicesApi';
import { useContext } from 'react';
import { ServiceContext } from '../../../contexts/serviceContext'
import PropTypes from 'prop-types';
import EstadoCampo from '../servicesCampos/estadoCampo';
import BotonEditar from '../servicesCampos/botonEditar';
import DescripcionCampo from '../servicesCampos/descripcionCampo';
//import HorarioCampo from '../servicesCampos/horarioCampo';
import BotonSubmit from '../servicesCampos/botonSubmit';
import BotonCancelar from '../servicesCampos/botonCancelar';
import HorarioCampo from '../servicesCampos/horarioCampo';
import Precio from '../servicesCampos/precioCampo';
import SubirImg from '../../imageCloudinary/subirImg';
import ImageGallery from '../../imageCloudinary/imageGalery';
import BackButtonForms from '../../botoneNavegacion/backButtonForms';


const OtherServiceForm = ({option}) =>{
    
    const {serviceData,isUpdated, setIsUpdated,
        currentOption,setCurrentOption, fetchData,horarios,setIsSuccessModalOpen,
        isSuccessModalOpen,openSuccessModal,handleChange} = useContext(ServiceContext);

   const handleUpdateService = async () => {
       try {
         if (currentOption === 'register') {
           const updatedServiceData = {
               ...serviceData,
               tipo_servicio: "Otros servicios",
           }; 
           await createService(updatedServiceData);
           openSuccessModal();

         } else if (currentOption === 'edit') {
           const updatedServiceData = {
               ...serviceData,
               horarios: horarios,
           }; 
           await updateService(updatedServiceData);
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
       labelClassname,
       inputDesing,
       selectDesing,
       divGrid,
       divGridSub
   } = FormsComponentsStyle;
    


  return (

    <div className={contenedor}>
        <form  onSubmit={handleSubmit}>
            <div className={divDesing}>
            <div className='mb-10 md:mb-0'>
              <div className={divGrid }>
                <div className={divGridSub}>
                  <BackButtonForms />
                </div>
                <div className={divGridSub}>
                  <BotonCancelar />
                  <BotonEditar />
                </div>
              </div>
            </div>
                <div className={divEspace}>
                    <h1 className={tituloServicio}> {currentOption=== 'edit' ? 'Editar servicio' : currentOption=== 'register'? 'Registrar servicio': 'Detalles del servicio'} </h1>
                    <label className={labelClassname} htmlFor="nombre">Nombre del servicio:</label>
                      <input
                        className={inputDesing}
                        type="text"
                        placeholder="Ejemplo: Venta de arroz de leche"
                        id="nombre"
                        name="nombre"
                        value={serviceData.nombre || ''}
                        onChange={handleChange}
                        disabled={currentOption=== 'show'}
                        required
                        
                      />
                </div>
                <EstadoCampo />
                
                <DescripcionCampo />
                <div className={divGrid}>
                    <div className={divGridSub}>
                    <Precio />
                    </div>
                    <div className={divGridSub}>
                        <div className={divEspace}>
                            <label className={labelClassname} htmlFor="area_otro_servicio_3">Área del servicio:</label>
                            <select
                                    className={selectDesing}
                                    id="area_otro_servicio_3"
                                    name="area_otro_servicio_3"
                                    value={serviceData.area_otro_servicio_3 || ''}
                                    onChange={handleChange}
                                    disabled={currentOption === 'show'}
                                    required
                                >
                                    <option value="">----</option>
                                    <option value="Administrativos y finanzas">Administrativos y finanzas</option>
                                    <option value="Atención al cliente">Atención al cliente</option>
                                    <option value="Gastronomia">Gastronomía</option>
                                    <option value="Artes u oficios">Artes u oficios</option>
                                    <option value="Tecnologia e informatica">Tecnología e informática</option>
                                    <option value="Belleza">Belleza</option>
                                    <option value="Mensajeria">Mensajería</option>
                                    <option value="Deporte">Deporte</option>
                                    <option value="Vestuario">Vestuario</option>
                                    <option value="Servicios generales">Servicios generales</option>
                                    <option value="Mascotas">Mascotas</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div className={divEspace }>
                    <SubirImg />
                    <ImageGallery />
                </div>

                <div className={divEspace + ' mt-14'}>
                <HorarioCampo />
                </div>

                
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

OtherServiceForm.propTypes = {
    option: PropTypes.string,
};

export default OtherServiceForm;