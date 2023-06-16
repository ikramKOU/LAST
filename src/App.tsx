import Landig_page from  './Landig_page';
import './Landig_page.css';
import './noscript.css';
import Login from './login';
import Register from './register';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBolt, faCameraRetro, faCog, faDesktop, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App(){
  return(
    <BrowserRouter>
    <Routes> 
     <Route path="/"  element={ <Landig_page />}/>
     <Route path="/login"  element={ <Login/>}/>
     <Route path="/register"  element={ <Register/>}/>
     <Route path="/*"  element={ <h1>page not found 404</h1>  }/>
    </Routes>
    </BrowserRouter>
   

  )
}
export default App;