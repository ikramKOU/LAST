import react from 'react';
import './register.css';
const Register = () => {
    return(
        <>
          <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth register-bg-1 theme-one">
          <div className="row w-100">
            <div className="col-lg-4 mx-auto">
              <h2 className="text-center mb-4" >Inscription des nouveaux étudiants </h2>
           
              <div className="auto-form-wrapper">
                <form action="#">
                  <div className="form-group">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Nom"/>
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Prénom"/>
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="CNE"/>
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="CNI"/>
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="email" className="form-control" placeholder="e-mail"/>
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Moyenne de bac"/>
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="password" className="form-control" placeholder="Mot de passe"/>
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="password" className="form-control" placeholder="Confirmation de mot de passe"/>
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="password" className="form-control" placeholder="Confirm Password"/>
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group d-flex justify-content-center">
                    <div className="form-check form-check-flat mt-0">
                      
                    </div>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary submit-btn btn-block">Valider l'inscription</button>
                  </div>
                  <div className="text-block text-center my-3">
                    <span className="text-small font-weight-semibold">déja inscris?</span>
                    <a href="login.html" className="text-black text-small">Login</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}


export default Register;