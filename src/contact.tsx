import react from 'react';
import './Contact.css';

const Contact = () => {
    return(
        <>
         <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth register-bg-1 theme-one">
          <div className="row w-100">
            <div className="col-lg-4 mx-auto">
              <h2 className="text-center mb-4" >Contactez-Nous </h2>
           
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
                      <input type="text" className="form-control" placeholder="email"/>
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                   
                  </div>
                  <div className="form-group">
                    
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message :</label>
                    <textarea className="form-control" id="message" name="message" rows={8} cols={90} />
                 </div>
                  <div className="form-group">
                   
                  </div>
                  <div className="form-group d-flex justify-content-center">
                    <div className="form-check form-check-flat mt-0">
                      
                    </div>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary submit-btn btn-block">Envoyer</button>
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
    
    
    export default Contact;