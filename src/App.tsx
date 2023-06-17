import Landig_page from  './Landig_page';
import './Landig_page.css';
import './noscript.css';
import Login from './components/login/login';
import Register from './components/register/register';
import RegisterP from './registerProf';
import Contact from './contact';
import Basic_tab from './basic-table';
import Tab_etu from './tab_etudiant';
import Tab_prof from './tab_prof';
import Tab_abs from './tab_abs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBolt, faCameraRetro, faCog, faDesktop, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './dashboard';
function App(){
  return(
    <BrowserRouter>
    <Routes> 
     <Route path="/"  element={ <Landig_page />}/>
     <Route path="/login"  element={ <Login/>}/>
     <Route path="/register"  element={ <Register/>}/>
     <Route path="/registerProf"  element={ <RegisterP/>}/>
     <Route path="/contact"  element={ <Contact/>}/>
     <Route path="/basic-table"  element={ <Basic_tab/>}/>
     <Route path="/tab_etudiant"  element={ <Tab_etu/>}/>
     <Route path="/tab_prof"  element={ <Tab_prof/>}/>
     <Route path="/tab_abs"  element={ <Tab_abs/>}/>
     <Route path="/dashboard/:name"  element={ <Dashboard/>}/>




     <Route path="/*"  element={ <h1>page not found </h1>  }/>
    </Routes>
    </BrowserRouter>
   

  )
}
export default App;