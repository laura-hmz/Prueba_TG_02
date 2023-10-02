import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext} from 'react';
import { UserContext } from './contexts/userContext.jsx';

import './components/servicios/explorar.jsx';
import NavBar2 from './components/navbar/navbar2.jsx';
import Explorar from './components/servicios/explorar.jsx';
//import EncuestaForm from './components/encuesta/encuestaForm.jsx';
//import PreguntasForm from './components/encuesta/preguntas.jsx';
//importar las vistas
import UserRegister from './views/users/userRegister.jsx';
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

  const {userData, isAuthenticated, isLoading, userExists, userDataAux} = useContext(UserContext);
 
  console.log('UserData en APP',userData);
  console.log('userExists en APP',userExists);
  console.log('resultados APP',userDataAux.resultados_encuesta);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  function getReturn(component) {
    if (isAuthenticated) {
      if (userExists) {
        return component;
      } else {
        return <UserRegister />;
      }
    } else {
      return <Home2 />;
    }
  }
 
  return (
    
      <BrowserRouter>
        {isAuthenticated && <NavBar2 />}
        <Routes>
        <Route path='/' element={isAuthenticated ? <Navigate to="/Home" /> : <Home2/>} />
          
          <Route path='/explorar' element={isAuthenticated && userExists ? <Explorar/> :  <Home2/> }/>
          <Route path='/UserRegister' element={isAuthenticated ? <UserRegister/> : <Home2/> }/>
          <Route path='/Home' element={getReturn(<Home/>) }/>
          <Route path='/profile' element={getReturn(<Profile/>)}/>
          <Route path='/editProfile'  element={getReturn(<EditProfile/>) }/>
          <Route path='/especialsearch' element={getReturn(<Especialsearch/>)}/>
          <Route path='/editService/:id' element={getReturn(<EditService/>)}/>
          <Route path="/register/transport" element={getReturn(<TransportServiceForm2 option='register'/>)}/>
          <Route path="/register/academic-advising" element={getReturn(<AcademyServiceForm option='register'/>) } />
          <Route path="/register/room" element={getReturn(<RoomServiceForm2 option='register'/>)} />
          <Route path="/register/other" element={getReturn(<OtherServiceForm option='register'/>)} />    
          <Route path='/savedServices' element={getReturn(<SavedServices/>)} />
          <Route path='/searchService' element={ getReturn(<SearchService/>)}/>
          <Route path='/serviceDetails/:id' element={getReturn(<ServiceDetails/>)}/>
          <Route path='/userServices' element={getReturn(<UserServices/>)} />
          <Route path='/offerService' element={getReturn(<OfferService/>)}/>

        </Routes>
      </BrowserRouter>
  
  )
      
}

export default App
