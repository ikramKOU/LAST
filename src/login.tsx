
import React from 'react'
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faBolt, faCameraRetro, faCog, faDesktop, faCalendar } from '@fortawesome/free-solid-svg-icons'
import logo from './assets/images/lofin.png'
import back from './assets/images/C1.jfif'
import back1 from './assets/images/C2.jfif'
import back2 from './assets/images/C3.jfif'
import second from './assets/images/kl.png'
function Login(){
    
return (	


<>

<div className="container-scroller">
      
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        
        <div className="content-wrapper d-flex align-items-center auth auth-bg-1 theme-one">
          <div className="row w-100">
            <div className="col-lg-4 mx-auto">
              <div className="auto-form-wrapper">
                <form action="#">
                  <div className="form-group">
                    <div className="container">
                          <div className="logo">
                            <img src="C:/Users/ikram/OneDrive/Bureau/pfa/images/logo_gris.jfif" alt="Logo de l'école" height="50" width="100"/>
                          </div>
                       </div>
                    <label className="label">Nom utilisateur</label>
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Username"/>
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="label">Mot de passe</label>
                    <div className="input-group">
                      <input type="password" className="form-control" placeholder="*********"/>
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <a href="C:/Users/ikram/OneDrive/Bureau/pfa/Dash/src/pages/tables/basic-table.html" className="btn btn-primary submit-btn btn-block">Login</a>
                    <button  className="btn btn-primary submit-btn btn-block">Login</button>
                   
                  </div>
                  <div className="form-group d-flex justify-content-between">
                    <div className="form-check form-check-flat mt-0">
                     
                    </div>
                    <a href="#" className="text-small forgot-password text-black">mot de passe oublié?</a>
                  </div>
                 
                  <div className="text-block text-center my-3">
                    <span className="text-small font-weight-semibold">pas inscris ?</span>
                    <a href="register.html" className="text-black text-small">s'inscrir</a>
                  </div>
                </form>
              </div>
              <ul className="auth-footer">
                <li>
                  <a href="#">Conditions</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
                
              </ul>
              <p className="footer-text text-center">copyright © IKRAM_kaw 2023</p>
              <p className="footer-text text-center text-center"><a href="" target="_blank"> </a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
{/* <div classNameName="container-scroller">
      
      <div classNameName="container-fluid page-body-wrapper full-page-wrapper">
        
        <div classNameName="content-wrapper d-flex align-items-center auth auth-bg-1 theme-one">
          <div classNameName="row w-100">
            <div classNameName="col-lg-4 mx-auto">
              <div classNameName="auto-form-wrapper">
                <form action="#">
                  <div classNameName="form-group">
                    <div classNameName="container">
                          <div classNameName="logo">
                            <img src="C:/Users/ikram/OneDrive/Bureau/pfa/images/logo_gris.jfif" alt="Logo de l'école" height="50" width="100"/>
                          </div>
                       </div>
                    <label classNameName="label">Nom utilisateur</label>
                    <div classNameName="input-group">
                      <input type="text" classNameName="form-control" placeholder="Username" />
                      <div classNameName="input-group-append">
                        <span classNameName="input-group-text">
                          <i classNameName="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div classNameName="form-group">
                    <label classNameName="label">Mot de passe</label>
                    <div classNameName="input-group">
                      <input type="password" classNameName="form-control" placeholder="*********"/>
                      <div classNameName="input-group-append">
                        <span classNameName="input-group-text">
                          <i classNameName="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div classNameName="form-group">
                    <a href="C:/Users/ikram/OneDrive/Bureau/pfa/Dash/src/pages/tables/basic-table.html" classNameName="btn btn-primary submit-btn btn-block">Login</a>
                   
                   
                  </div>
                  <div classNameName="form-group d-flex justify-content-between">
                    <div classNameName="form-check form-check-flat mt-0">
                     
                    </div>
                    <a href="#" classNameName="text-small forgot-password text-black">mot de passe oublié?</a>
                  </div>
                 
                  <div classNameName="text-block text-center my-3">
                    <span classNameName="text-small font-weight-semibold">pas inscris ?</span>
                    <a href="register.html" classNameName="text-black text-small">s'inscrir</a>
                  </div>
                </form>
              </div>
              <ul classNameName="auth-footer">
                <li>
                  <a href="#">Conditions</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
                
              </ul>
              <p classNameName="footer-text text-center">copyright © IKRAM_kaw 2023</p>
              <p classNameName="footer-text text-center text-center"><a href="" target="_blank"> </a></p>
            </div>
          </div>
        </div>
      </div>
    </div> */}
  

</>
)
}
export default  Login;