import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './components/servicios/explorar.jsx';
import NavBar from './components/navbar/navbar.jsx';
import NavBar2 from './components/navbar/navbar2.jsx';
import Explorar from './components/servicios/explorar.jsx';
//importar las vistas
import Home from './views/home.jsx';
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

  return (
    <BrowserRouter>
      <NavBar2/>
      <Routes>
        <Route path='/' element={<Explorar/>}/>
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
      </Routes>
    </BrowserRouter>
  )
      
}

export default App
