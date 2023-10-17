import  { useEffect } from 'react';
import {lastServicesAdded, getServices } from '../api/servicesApi';
import CardService4 from '../components/servicios/cards/cardService4';
import { UserContext } from '../contexts/userContext';
import { useContext } from 'react';
import ImageCarousel from '../components/carrusel/imageCarrusel';
import imagen1 from '../images/muak.jpeg';
import imagen2 from '../images/copia.png';
import { CardServiceContext } from '../contexts/cardServiceContext';
import HomeAnimation from '../components/loaders/animation/homeAnimation';

const Home = () => {
  const { userData} = useContext(UserContext);
  const {setServices, services, setIsSearch} = useContext(CardServiceContext);
  const images = [
      imagen1,
      imagen2,
      imagen1,
      imagen2,
    ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getServices();
        setServices(data);
        setIsSearch(false);
      } catch (error) {
        console.error('Error al obtener los servicios:', error);
      }
    };
    fetchData();
   }, [userData, setServices, setIsSearch]);

    return (
      <>
      <HomeAnimation />
      {services? <CardService4  />: <h1>AYUDAME DIOS</h1>}
      </>
  ) 
}

export default Home