import { useState, useEffect } from 'react';
import FormsComponentsStyle from '../servicesComponentesStyle/formsComponentsStyle';
import { updateService, createService } from '../../../api/servicesApi';
import { useContext } from 'react';
import { ServiceContext } from '../../../contexts/serviceContext'
import CamposBase from '../servicesCampos/estadoCampo';
import BotonEditar from '../servicesCampos/botonEditar';
import NombreCampo from '../servicesCampos/nombreCampo';
import DescripcionCampo from '../servicesCampos/descripcionCampo';
import VehiculoCampo from '../servicesCampos/vehiculoCampo';
import HorarioCampo from '../servicesCampos/horarioCampo';


const TransportServiceForm3 = () =>{
    //manejo del formuario
    const {serviceData,isUpdated, setIsUpdated,
         currentOption,setCurrentOption, fetchData,horarios, setHorarios} = useContext(ServiceContext);

    //   };
      //Los eventos de submit
      const handleUpdateService = async () => {
        try {
          if (currentOption === 'register') {
            console.log('Registrando un nuevo servicio:', serviceData.horarios);
            createService(serviceData);

          } else if (currentOption === 'edit') {
            console.log('Actualizando servicio existente:', serviceData);
            console.log('los horarios obtenidos:', horarios);
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
            setIsUpdated(false);

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
                <BotonEditar />
                <div className={divEspace}>
                    <h1 className={tituloServicio}> {currentOption=== 'edit' ? 'Editar servicio de transporte' : 'Registrar servicio de transporte'} </h1>
                    <NombreCampo />
                </div>
                <CamposBase />
                <DescripcionCampo />
                <VehiculoCampo />
                <HorarioCampo />


                <div >
                    {currentOption !== 'show' && (
                        <button
                            className="outline-none glass shadow-2xl w-full rounded p-3 bg-green-400 hover:border-white hover:border-solid hover:border-[1px] hover:text-white font-bold"
                            type="submit"
                        >
                            {currentOption === 'edit' ? 'Guardar cambios' : currentOption === 'register' ? 'Registrar nuevo servicio' : ''}
                        </button>
                    )}

                </div>

            </div>
        
        </form>
    </div>
  );
}


export default TransportServiceForm3;