import react from 'react';
import './tab_prof.css';
const Tab_prof = () => {
    return(
        <>  
      
        
      <div className="container-scroller">
     
        <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
          <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
            <a className="navbar-brand brand-logo" href="C:/Users/ikram/OneDrive/Bureau/pfa/index.html">
              <img src="C:/Users/ikram/OneDrive/Bureau/pfa/images/logo_gris.jfif" alt="logo" /> </a>
             
          </div>
          <div className="navbar-menu-wrapper d-flex align-items-center">
            <ul className="navbar-nav">
              <li className="nav-item font-weight-semibold d-none d-lg-block">assistante : +212 2992 709</li>
              <li className="nav-item dropdown language-dropdown">
                <a className="nav-link dropdown-toggle px-2 d-flex align-items-center" id="LanguageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                  <div className="d-inline-flex mr-0 mr-md-3">
                    <div className="flag-icon-holder">
                      <i className="flag-icon flag-icon-us"></i>
                    </div>
                  </div>
                  <span className="profile-text font-weight-medium d-none d-md-block">Fr</span>
                </a>
                <div className="dropdown-menu dropdown-menu-left navbar-dropdown py-2" aria-labelledby="LanguageDropdown">
                  <a className="dropdown-item">
                    <div className="flag-icon-holder">
                      <i className="flag-icon flag-icon-us"></i>
                    </div>English
                  </a>
                  <a className="dropdown-item">
                    <div className="flag-icon-holder">
                      <i className="flag-icon flag-icon-fr"></i>
                    </div>French
                  </a>
                  <a className="dropdown-item">
                    <div className="flag-icon-holder">
                      <i className="flag-icon flag-icon-ae"></i>
                    </div>Arabic
                  </a>
                  
                </div>
              </li>
            </ul>
            <form className="ml-auto search-form d-none d-md-block" action="#">
              <div className="form-group">
                <input type="search" className="form-control" placeholder="Search Here"/>
              </div>
            </form>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a className="nav-link count-indicator" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                  <i className="mdi mdi-bell-outline"></i>
                  <span className="count">7</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="messageDropdown">
                  <a className="dropdown-item py-3">
                    <p className="mb-0 font-weight-medium float-left">7 mail </p>
                    <span className="badge badge-pill badge-primary float-right">afficher tout</span>
                  </a>
                  <div className="dropdown-divider"></div>
                  
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img src="#" alt="image" className="img-sm profile-pic"/>
                    </div>
                    
                  </a>
                 
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link count-indicator" id="notificationDropdown" href="#" data-toggle="dropdown">
                  <i className="mdi mdi-email-outline"></i>
                  <span className="count bg-success">3</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="notificationDropdown">
                  <a className="dropdown-item py-3 border-bottom">
                    <p className="mb-0 font-weight-medium float-left">You have 4 new notifications </p>
                    <span className="badge badge-pill badge-primary float-right">View all</span>
                  </a>
                  <a className="dropdown-item preview-item py-3">
                    <div className="preview-thumbnail">
                      <i className="mdi mdi-alert m-auto text-primary"></i>
                    </div>
                    <div className="preview-item-content">
                      <h6 className="preview-subject font-weight-normal text-dark mb-1">Application Error</h6>
                      <p className="font-weight-light small-text mb-0"> Just now </p>
                    </div>
                  </a>
                  <a className="dropdown-item preview-item py-3">
                    <div className="preview-thumbnail">
                      <i className="mdi mdi-settings m-auto text-primary"></i>
                    </div>
                    <div className="preview-item-content">
                      <h6 className="preview-subject font-weight-normal text-dark mb-1">Settings</h6>
                      <p className="font-weight-light small-text mb-0"> Messages privé </p>
                    </div>
                  </a>
                  <a className="dropdown-item preview-item py-3">
                    <div className="preview-thumbnail">
                      <i className="mdi mdi-airballoon m-auto text-primary"></i>
                    </div>
                    <div className="preview-item-content">
                      <h6 className="preview-subject font-weight-normal text-dark mb-1">New user registration</h6>
                      <p className="font-weight-light small-text mb-0"> 2 days ago </p>
                    </div>
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown d-none d-xl-inline-block user-dropdown">
                <a className="nav-link dropdown-toggle" id="UserDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                  <img className="img-xs rounded-circle" src="#" alt="Profile image"/> </a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                  <div className="dropdown-header text-center">
                    <img className="img-md rounded-circle" src="#" alt="Profile image"/>
                    <p className="mb-1 mt-3 font-weight-semibold">IKRAMISTA_kaw</p>
                    <p className="font-weight-light text-muted mb-0">ikram1234@gmail.com</p>
                  </div>
                  <a className="dropdown-item">MON Profile <span className="badge badge-pill badge-danger">1</span><i className="dropdown-item-icon ti-dashboard"></i></a>
                  <a className="dropdown-item">Messages<i className="dropdown-item-icon ti-comment-alt"></i></a>
                  <a className="dropdown-item">Sign Out<i className="dropdown-item-icon ti-power-off"></i></a>
                </div>
              </li>
            </ul>
            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
              <span className="mdi mdi-menu"></span>
            </button>
          </div>
        </nav>
        <div className="container-fluid page-body-wrapper">
  
          <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
             
              <li className="nav-item nav-category">Espaces à gérer</li>
              <a className="nav-link" href="/">
                  <i className="menu-icon typcn typcn-document-text"></i>
                  <span className="menu-title">Acceuil</span>
                </a>
            
              <li className="nav-item">
                <a className="nav-link" data-toggle="collapse" href="/tab_etudiant" aria-expanded="false" aria-controls="ui-basic">
                 
                  <span className="menu-title">les étudiants</span>
             
                </a>
            
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/tab_prof">
                  <i className="menu-icon typcn typcn-shopping-bag"></i>
                  <span className="menu-title">Les professeurs</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/tab_abs">
                  <i className="menu-icon typcn typcn-th-large-outline"></i>
                  <span className="menu-title">Les absences</span>
                </a>
              </li>
  
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="menu-icon typcn typcn-bell"></i>
                  <span className="menu-title">notes</span>
                </a>
              </li>
             
             
            </ul>
          </nav>
      
          <div className="main-panel">
            <div className="content-wrapper">
      
              <div className="row page-title-header">
                <div className="col-12">
                  <div className="page-header">
                    <h4 className="page-title">Dashboard</h4>
                    <div className="quick-link-wrapper w-100 d-md-flex flex-md-wrap">
                      <ul className="quick-links">
                        <li><a href="C:/Users/ikram/OneDrive/Bureau/pfa/Dash/src/pages/tables/tab_etudiant.html">etudiant</a></li>
                        <li><a href="C:/Users/ikram/OneDrive/Bureau/pfa/Dash/src/pages/tables/tab_professeur.html">professeur</a></li>
                        <li><a href="C:/Users/ikram/OneDrive/Bureau/pfa/Dash/src/pages/tables/tab_absence.html">absences</a></li>
                        <li><a href="C:/Users/ikram/OneDrive/Bureau/pfa/Dash/src/pages/tables/tab_cours.html">cours</a></li>
                        <li><a href="C:/Users/ikram/OneDrive/Bureau/pfa/Dash/src/pages/tables/tab_notes.html">notes</a></li>
                      </ul>
                      <ul className="quick-links ml-auto">
                        <li><a href="#">Paramétres</a></li>
          
                        <li><a href="#">afficher tout</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
               
              </div>
              <div className="col-lg-12 stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Professeur</h4>
                    <p className="card-description"> la liste des professeurs </p>
                    <div className="container">
               
            
                      <button type="button" className="btn btn-outline-danger float-right">Supprimer</button>
                 
                      <button type="button" className="btn btn-outline-success float-right">Modifier</button>
                      <button type="button" className="btn btn-outline-primary  float-right">Ajouter</button>


                    </div>
                    <div className="container">
                      <h1>--------------------------------------------------------------------------------</h1>
                    </div>
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th> ID </th>
                          <th> NOM </th>
                          <th>PRENOM </th>
                          <th>EMAIL </th>
                          <th>CIN </th>
                          <th>Télephone </th>

                          <th> cours  </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="table-info">
                          <td> 1 </td>
                          <td> kourtass </td>
                          <td> fati </td>
                          <td> ikramkourtasse@gamil.com </td>
                          <td> P324537 </td>
                          <td> 0723456789 </td>

                          <td> Java avancé</td>
                        </tr>
                        <tr className="table-warning">
                          <td> 2 </td>
                          <td> kourtass </td>
                          <td> fati </td>
                          <td> ikramkourtasse@gamil.com </td>
                          <td> P324537 </td>
                          <td> 062346789 </td>

                          <td>python</td>
                        </tr>
                        <tr className="table-danger">
                            <td> 3 </td>
                            <td> majid </td>
                            <td> sanae </td>
                            <td> sjhdjjasse@gamil.com </td>
                            <td> P324537 </td>
                            <td> 077209789 </td>
  
                            <td>XML</td>
                        </tr>
                        <tr className="table-success">
                            <td> 4</td>
                          <td> kourtass </td>
                          <td> fati </td>
                          <td> ivgdcshdcge@gamil.com </td>
                          <td> P324537 </td>
                          <td> 07123489 </td>

                          <td>Francais</td>
                        </tr>
                        <tr className="table-primary">
                            <td> 5 </td>
                          <td> babasahman </td>
                          <td> Kawtar </td>
                          <td> gzeygfzeyhfge@gamil.com </td>
                          <td> P324537 </td>
                          <td> 0723456789 </td>

                          <td> anglais</td>
                        </tr>
                        <tr className="table-primary">
                          <td> 6</td>
                        <td> salama </td>
                        <td> iman </td>
                        <td> gzeygfzeyhfge@gamil.com </td>
                        <td> P324537 </td>
                        <td> 0723456789 </td>

                        <td> Sport</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
           
            </div>

          <footer className="footer">
            <div className="container-fluid clearfix">
              <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © IKRAM_kaw</span>
              <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> Free <a href="" target="_blank">ikramkourtasse</a> ikramkourtasse1234@GMAIL.com</span>
            </div>
          </footer>
       
        
        </div>
    
        
        </>
        )
    }
    
    
    export default Tab_prof;