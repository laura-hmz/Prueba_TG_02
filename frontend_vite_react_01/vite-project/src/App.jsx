import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext} from 'react';
import { UserContext } from './contexts/userContext.jsx';
import { ServiceProvider } from './contexts/serviceContext';
import { SearchContextProvider } from './contexts/searchContext.jsx';
import './components/servicios/explorar.jsx';
import NavBar2 from './components/navbar/navbar2.jsx';
import Explorar from './components/servicios/explorar.jsx';
import LoaderInit from './components/loaders/loaderInit.jsx';
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
import TransportServiceForms3 from './components/servicios/forms/trasnportServiceForms3.jsx';
import AcademyServiceForm from './components/servicios/forms/academyServiceForm.jsx';
import OtherServiceForm from './components/servicios/forms/otherServiceForm.jsx';
import RoomServiceForm2 from './components/servicios/forms/roomServiceForm2.jsx';
import { CardServiceProvider } from './contexts/cardServiceContext.jsx';
import UserDetails from './views/users/userDetails.jsx';



function App() {
  
  const {isAuthenticated, isLoading, userExists, isLoadingUser} = useContext(UserContext);
 
  if (isLoading || isLoadingUser && isAuthenticated) {
    return <LoaderInit />;
  }

  function getReturn(component) {
    console.log('user exists', userExists);
    if (isAuthenticated && userExists) {
        return component;
      }
      if (isAuthenticated && !userExists) {
        return <Navigate to="/UserRegister" />;
      }
      else {
        return <Navigate to="/login" />;
    }
  }
 
  return (
    <ServiceProvider>
      <CardServiceProvider>
        <SearchContextProvider>
          <BrowserRouter>
        
            {isAuthenticated && <NavBar2 />}
            <Routes>
              <Route path='/' element={isAuthenticated ? <Navigate to="/Home" /> : <Navigate to="/login"/>} />
          
              <Route path='/explorar' element={isAuthenticated && userExists ? <Explorar/> :  <Navigate to="/login"/> }/>
              <Route path='/UserRegister' element={isAuthenticated && !userExists ? <UserRegister/> :isAuthenticated && userExists? <Navigate to="/Home" />: <Navigate to="/login"/> }/>
              <Route path='/Home' element={getReturn(<Home/>) }/>
              <Route path='/profile' element={getReturn(<Profile/>)}/>
              <Route path='/editProfile'  element={getReturn(<EditProfile/>) }/>
              <Route path='/especialsearch' element={getReturn(<Especialsearch/>)}/>
              <Route path='/editService/:id' element={getReturn(<EditService/>)}/>
              <Route path="/register/transport" element={getReturn(<TransportServiceForms3 option="register" />)}/>
              <Route path="/register/academic-advising" element={getReturn(<AcademyServiceForm option="register" />) } />
              <Route path="/register/room" element={getReturn(<RoomServiceForm2 option="register"/>)} />
              <Route path="/register/other" element={getReturn(<OtherServiceForm  option="register"/>)} />    
              <Route path='/savedServices' element={getReturn(<SavedServices/>)} />
              <Route path='/searchService' element={ getReturn(<SearchService/>)}/>
              <Route path='/serviceDetails/:id' element={getReturn(<ServiceDetails/>)}/>
              <Route path='/userServices' element={getReturn(<UserServices/>)} />
              <Route path='/offerService' element={getReturn(<OfferService/>)}/>
              <Route path='/userDetails/:id' element={getReturn(<UserDetails/>)}/>
              <Route path='*' element={<Navigate to="/Home" />} />
              <Route path='/login' element={!isAuthenticated ? <Home2/> : <Navigate to="/Home" />} />

            </Routes>
          </BrowserRouter>
        </SearchContextProvider>
      </CardServiceProvider>
    </ServiceProvider>
  
  )
      
}

export default App
