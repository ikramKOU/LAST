import react from 'react';
import Table from '../table/table';

const Sidebar = () =>{
    return (
        <>
        <div className="container-fluid page-body-wrapper">
          <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
             
              <li className="nav-item nav-category" >Espaces à gérer</li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="menu-icon typcn typcn-document-text"></i>
                  <span className="menu-title">Acceuil</span>
                </a>
              </li>
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
          
          <Table/>    
             
             

            </div>
        </>
    )
}

export default Sidebar;