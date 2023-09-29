import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
//import { useEffect, useContext } from 'react';
//importo contexto

import { UserContext, UserProvider } from './contexts/userContext.jsx';


import './components/servicios/explorar.jsx';
import NavBar2 from './components/navbar/navbar2.jsx';
import Explorar from './components/servicios/explorar.jsx';
//importar las vistas
import Home from './views/home.jsx';
import Home2 from './components/login/home2.jsx'
import Profile from './views/users/profile.jsx';
import EditProfile from './views/users/editProfile.jsx';
import Especialsearch from './views/services/especialSearch.jsx';
import EditService from './views/services/editService.jsx';
import SavedServices from './views/services/savedServices.jsx';
import SearchService from './views/services/searchService.jsx';
import ServiceDetails from './views/services/serviceDetails.jsx';
import UserServices from './views/services/userServices.jsx';
import OfferService from './views/services/offerService.jsx';
import TransportServiceForm2 from './components/servicios/forms/transportServiceForm2.jsx';
import AcademyServiceForm from './components/servicios/forms/academyServiceForm.jsx';
import OtherServiceForm from './components/servicios/forms/otherServiceForm.jsx';
import RoomServiceForm2 from './components/servicios/forms/roomServiceForm2.jsx';


function App() {

  const { isAuthenticated, user, isLoading } = useAuth0();
  // const [userEmail, setUserEmail] = useContext(UserContext);
  // console.log('userEmail',userEmail);
  // setUserEmail(user.email);

  console.log('Estoy al inicio de la app. El usuario es: ',user);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     setUserEmail(user.email);
  //     console.log('El usuario está autenticado y el userEmail es:', user.email);
  //   }
  // }, [isAuthenticated, user]);

  // useEffect(() => {
  //   if (userEmail) {
  //     // Llama a getUserData para cargar los datos del usuario
  //     getUserData();
  //   }
  // }, [userEmail]);

  if (isLoading) {
    // Muestra un indicador de carga mientras Auth0 verifica la autenticación
    return <div>Cargando...</div>;
  }


  return (
    <UserProvider>
      <BrowserRouter>
        {isAuthenticated && <NavBar2 />}
        <Routes>
        <Route path='/' element={isAuthenticated ? <Navigate to='/Home' /> : <Home2 />} />
          
          {isAuthenticated && (
          <>
          <Route path='/explorar' element={<Explorar/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/editProfile' element={<EditProfile/>}/>
          <Route path='/especialsearch' element={<Especialsearch/>}/>
          <Route path='/editService/:id' element={<EditService/>}/>
          <Route path="/register/transport" element={<TransportServiceForm2 option='register'/>} />
          <Route path="/register/academic-advising" element={<AcademyServiceForm option='register'/>} />
          <Route path="/register/room" element={<RoomServiceForm2 option='register'/>} />
          <Route path="/register/other" element={<OtherServiceForm option='register'/>} />    
          <Route path='/savedServices' element={<SavedServices/>}/>
          <Route path='/searchService' element={<SearchService/>}/>
          <Route path='/serviceDetails/:id' element={<ServiceDetails/>}/>
          <Route path='/userServices' element={<UserServices/>}/>
          <Route path='/offerService' element={<OfferService/>}/>
          </>
          
          )}
        

        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
      
}

export default App
