import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './components/servicios/explorar.jsx';
import NavBar from './components/navbar/navbar.jsx';
import Explorar from './components/servicios/explorar.jsx';
//importar las vistas
import Home from './views/home.jsx';
import Profile from './views/users/profile.jsx';
import EditProfile from './views/users/editProfile.jsx';
import SearchResults from './views/services/searchResults.jsx';
import EditService from './views/services/editService.jsx';
import SavedServices from './views/services/savedServices.jsx';
import SearchService from './views/services/searchService.jsx';
import ServiceDetails from './views/services/serviceDetails.jsx';
import UserServices from './views/services/userServices.jsx';

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Explorar/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/editProfile' element={<EditProfile/>}/>
        <Route path='/searchResults' element={<SearchResults/>}/>
        <Route path='/editService/:id' element={<EditService/>}/>
        <Route path='/savedServices' element={<SavedServices/>}/>
        <Route path='/searchService' element={<SearchService/>}/>
        <Route path='/serviceDetails/:id' element={<ServiceDetails/>}/>
        <Route path='/userServices' element={<UserServices/>}/>
      </Routes>
    </BrowserRouter>
  )
      
}

export default App
