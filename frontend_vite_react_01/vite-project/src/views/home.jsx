import  { useState, useEffect } from 'react';
import {lastServicesAdded, getServices } from '../api/servicesApi';
//import ServicesList1 from '../components/servicios/servicesList1';
import CardService3 from '../components/servicios/cardService3';
import { UserContext } from '../contexts/userContext';
import { useContext } from 'react';

const Home = () => {
    const [services, setServices] = useState([]);
    const { userEmail, userData} = useContext(UserContext);
    

    
    

    useEffect(() => {
      // Realizar una solicitud para obtener los servicios cuando el componente se monta
      const fetchData = async () => {
        try {
          const data = await getServices();
          //console.log(data);
          console.log('home user data: ',userData);
          setServices(data); 
        } catch (error) {
          console.error('Error al obtener los servicios:', error);
        }
      };
      
      fetchData();
      console.log('home user data33: ',userData);
    }, [userData]);
  
    return (
      <>
      <h1>Home { userEmail }</h1>
      <CardService3 services={services} />
      </>
      
  ) 
}

export default Home