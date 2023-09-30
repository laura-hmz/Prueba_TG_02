import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { UserContext } from './contexts/userContext.jsx';

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

  const {userData, isAuthenticated, isLoading} = useContext(UserContext);
 
  console.log('UserData en APP',userData);
  //console.log('Auth0 usar APPP ',user);

  // useEffect(() => {
  //   if (userData?)  {
  //     <div>Usuario no encontrado</div>
  //   }  
    
  // })[userData]

  if (isLoading) {
    return <div>Loading...</div>;
  }
  

  return (
    
      <BrowserRouter>
        {isAuthenticated && <NavBar2 />}
        <Routes>
        <Route path='/' element={isAuthenticated ? <Navigate to="/Home" />  : <Home2 />} />
          
         
          <Route path='/explorar' element={isAuthenticated ? <Explorar/> : <Home2/> }/>
          <Route path='/Home' element={isAuthenticated ? <Home/> : <Home2/>}/>
          <Route path='/profile' element={ isAuthenticated ?<Profile/> : <Home2/> }/>
          <Route path='/editProfile'  element={isAuthenticated ? <EditProfile/> : <Home2/> }/>
          <Route path='/especialsearch' element={isAuthenticated ?<Especialsearch/> : <Home2/>}/>
          <Route path='/editService/:id' element={ isAuthenticated ?<EditService/> : <Home2/>}/>
          <Route path="/register/transport" element={isAuthenticated ?<TransportServiceForm2 option='register'/> : <Home2/>} />
          <Route path="/register/academic-advising" element={isAuthenticated ?<AcademyServiceForm option='register'/> : <Home2/>} />
          <Route path="/register/room" element={isAuthenticated ? <RoomServiceForm2 option='register'/> : <Home2/>} />
          <Route path="/register/other" element={<OtherServiceForm option='register'/>} />    
          <Route path='/savedServices' element={isAuthenticated ?<SavedServices/> : <Home2/>} />
          <Route path='/searchService' element={ isAuthenticated ? <SearchService/> : <Home2/>}/>
          <Route path='/serviceDetails/:id' element={isAuthenticated ?<ServiceDetails/> : <Home2/>}/>
          <Route path='/userServices' element={isAuthenticated ?<UserServices/> : <Home2/>} />
          <Route path='/offerService' element={isAuthenticated ? <OfferService/> : <Home2/>}/>
         
       
        

        </Routes>
      </BrowserRouter>
  
  )
      
}

export default App
