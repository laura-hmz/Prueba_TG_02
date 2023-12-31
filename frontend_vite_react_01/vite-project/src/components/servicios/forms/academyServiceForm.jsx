import { useEffect } from 'react';
import FormsComponentsStyle from '../servicesComponentesStyle/formsComponentsStyle';
import SuccessMessage from '../../../components/mensajesAuxliliares/successRegister';
import { useContext } from 'react';
import { ServiceContext } from '../../../contexts/serviceContext'
import PropTypes from 'prop-types';
import EstadoCampo from '../servicesCampos/estadoCampo';
import BotonEditar from '../servicesCampos/botonEditar';
import DescripcionCampo from '../servicesCampos/descripcionCampo';
import HorarioCampo from '../servicesCampos/horarioCampo';
import BotonSubmit from '../servicesCampos/botonSubmit';
import BotonCancelar from '../servicesCampos/botonCancelar';
import Precio from '../servicesCampos/precioCampo';
import BackButtonForms from '../../botoneNavegacion/backButtonForms';


const AcademyServiceForm = ({option}) =>{
    
    const {serviceData,isUpdated, setIsUpdated,
        currentOption,setCurrentOption, fetchData,setIsSuccessModalOpen,
        isSuccessModalOpen,handleChange, 
        isRegisterService, handleUpdateService} = useContext(ServiceContext);

     
   const handleSubmit = (e) => {
       e.preventDefault();
       handleUpdateService("Asesorías Académicas");
   }; 
   
   useEffect(() => {
       if (currentOption === 'show'&& isUpdated) {
           fetchData(serviceData._id);
           setIsUpdated(false);
           
          }
       else if (option === 'register') {
          setCurrentOption('register');
       }
   }, [currentOption, isUpdated, fetchData, serviceData, setIsUpdated, option, setCurrentOption]);

   const {
       divDesing,
       divEspace,
       tituloServicio,
       contenedor,
       labelClassname,
       inputDesing,
       selectDesing,
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
                        disabled={currentOption=== 'show' || isRegisterService}
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
                      <label className={labelClassname} htmlFor="area_0">Área:</label>
                      <select
                          className={selectDesing}
                          id="area_0"
                          name="area_0"
                          value={serviceData.area_0 || ''}
                          onChange={handleChange}
                          disabled={currentOption === 'show' || isRegisterService}
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
AcademyServiceForm.propTypes = {
  option: PropTypes.string,
}
export default AcademyServiceForm;