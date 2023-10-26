import  { useEffect } from 'react';
import {lastServicesAdded } from '../api/servicesApi';
import CardService4 from '../components/servicios/cards/cardService4';
import { UserContext } from '../contexts/userContext';
import { useContext } from 'react';
import { CardServiceContext } from '../contexts/cardServiceContext';
import PageHeaderHome from '../components/headers/pageHerderHome';
import CarruselHome from '../components/carrusel/carruselHome';

const Home = () => {
  const { userData} = useContext(UserContext);
  const {setServices, services, setIsSearch} = useContext(CardServiceContext);
  const banners = [
    { url: 'https://res.cloudinary.com/dt0ejpyba/image/upload/v1698322178/1_d9t0bs.jpg' },
    { url: 'https://res.cloudinary.com/dt0ejpyba/image/upload/v1698322179/4_jux5pw.jpg' },
    { url: 'https://res.cloudinary.com/dt0ejpyba/image/upload/v1698322178/2_ubqzcg.jpg' },
    { url: 'https://res.cloudinary.com/dt0ejpyba/image/upload/v1698322179/3_stxdc2.jpg' },
    { url: 'https://res.cloudinary.com/dt0ejpyba/image/upload/v1698322179/5_cr6kyk.jpg' },
    { url: 'https://res.cloudinary.com/dt0ejpyba/image/upload/v1698322180/6_qv70ie.jpg' },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await lastServicesAdded(userData._id);
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
        <div className='md:mt-12 mt-10 py-2'></div>
        <CarruselHome banners={banners} />
        <PageHeaderHome title="Últimos servicios agregados por otros usuarios"/>
        {services? <CardService4  />: <h1>AYUDAME DIOS</h1>}
      </>
  ) 
}

export default Home