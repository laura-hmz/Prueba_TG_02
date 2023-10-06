import  { useState, useEffect } from 'react';
import {lastServicesAdded, getServices } from '../api/servicesApi';
//import ServicesList1 from '../components/servicios/servicesList1';
import CardService3 from '../components/servicios/cardService3';
import { UserContext } from '../contexts/userContext';
import { useContext } from 'react';
import ImageCarousel from '../components/carrusel/imageCarrusel';
import imagen1 from '../images/muak.jpeg';
import imagen2 from '../images/copia.png';



const Home = () => {
    const [services, setServices] = useState([]);
    const { userData} = useContext(UserContext);

    const images = [
      imagen1,
      //imagen2,
      imagen1,
      //imagen2,
      imagen1,

    
    ];

    useEffect(() => {
      // Realizar una solicitud para obtener los servicios cuando el componente se monta
      const fetchData = async () => {
        try {
          const data = await getServices();
          //console.log(data);
          //console.log('home user data: ',userData);
          setServices(data); 
        } catch (error) {
          console.error('Error al obtener los servicios:', error);
        }
      };
      
      fetchData();
    }, [userData]);
  
    return (
      <>
    
      <CardService3 services={services} />
      </>
      
  ) 
}

export default Home