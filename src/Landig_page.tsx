
import React from 'react'
import './Landig_page.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faBolt, faCameraRetro, faCog, faDesktop, faCalendar } from '@fortawesome/free-solid-svg-icons'
import logo from './assets/images/lofin.png'
import back from './assets/images/C1.jfif'
import back1 from './assets/images/C2.jfif'
import back2 from './assets/images/C3.jfif'
import second from './assets/images/kl.png'
function Landig_page(){
    const headerStyle = {
        color: 'white'
      };
return (	
<>
<body className="is-preload">
<div className="container-fluid">
      <div className="row header_css">
        <div className="col-md-3">
          <a href="/login" className="btn btn-secondary">
            Connexion
          </a>
        </div>
        <div className="col-md-3">
          <a href="/register" className="btn btn-secondary">
            Pré-Inscription
          </a>
        </div>
        <div className="col-md-3">
          <a href="/registerProf" className="btn btn-secondary">
            Inscription Professeur
          </a>
        </div>
        <div className="col-md-3">
          <a href="/contact" className="btn btn-secondary">
            Contact
          </a>
        </div>
      </div>
    </div>

        <section id="header">
          <div className="inner">

            <span>
              <img src={logo} alt="" />

            </span>
            <h1>
              PLONGEZ DANS L’EXCELLENCE EDUCATIVE
              <br />
              Bienvenue <a href="#"></a>.
            </h1>
            <p>
            découvrir les nouvelles technologies de l'information constitue <br />
              un levier de développement de l’innovation
            </p>
            <ul className="actions special">
              <li>
                <a href="#" className="button scrolly">
                  décovrir notre groupe scolaire
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section id="one" className="main style1">
          <div className="container">
            <div className="row gtr-150">
              <div className="col-6 col-12-medium">
                <header className="major">
                <h2 style={headerStyle}>Institut Suprérieur<br />Des science de l'ingénieur</h2>
                </header>
                <p>
                  ISSI est le premier institut du digital qui s'engage sur l'emploi, le fruit d'un partenariat des acteurs académiques et professionnels,
                   ISSI développe
                  des cursus de formations basés sur les besoins du marché et orienté vers les certifications internationales..
                </p>
              </div>
              <div className="col-6 col-12-medium imp-medium">
                <span className="image fit">
                  <img
      src={second}
      style={{ width: '600px', height: '450px' }}
      alt="Image"
    />
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id="two" className="main style2">
<div className="container">
<div className="row gtr-150">
<div className="col-6 col-12-medium">
							<ul className="major-icons">
								<li><span className="icon solid style1 major fa-code"></span></li>
								<li><span className="icon solid style2 major fa-bolt"></span></li>
								<li><span className="icon solid style3 major fa-camera-retro"></span></li>
								<li><span className="icon solid style4 major fa-cog"></span></li>
								<li><span className="icon solid style5 major fa-desktop"></span></li>
								<li><span className="icon solid style6 major fa-calendar"></span></li>
							</ul>
						</div>
                    
<div className="col-6 col-12-medium">
<header className="major">
<h2>
Formation<br />
Systeme de l'information et la transformation degitale
</h2>
</header>
<p>Notre approche de formation est basée sur la préparation réelle au marché de l’emploie local, régional, national et international à travers la mise ne relation le plutôt possible avec le marché de m’emploi à travers des conventions de partenariat avec les grand acteur du marché IBM, Microsoft, HUWAIE, Idate et don réseaux de partenaires : capgemini, Orange, Pwc, Gfi, . . . etc , nous privilégions aussi les certifications internationales reconnues pour valoriser doublement le parcours de nos ingénieurs.</p>
							<p>Nos formations tendent à favoriser la maitrise progressive et agile d’outils et de technologies de conception et de production informatiques, l’autonomisation des développeurs et l’apprentissage participatif en mode projet et le développement des « soft skills » et de la communication interpersonnelle et enfin des techniques de «problem-solving ». Nous encourageons aussi
								 l’entreprenariat en mettant un place dés la première année de formation un incubateur pour offrir aux étudiants un espace d’innovation et de créativité pour développer leurs idées et réaliser leur projets en assurant un encadrement professionnelle à travers notre réseau de partenaires et nos Hackaton..</p>

</div>
</div>
</div>
</section>

<section id="three" className="main style1 special">
      <div className="container">
        <header className="major">
          <h2>Cours Standard</h2>
        </header>
        <p>PLONGEZ DANS L’EXCELLENCE EDUCATIVE QVEC NOS COURS EN LIGNE.</p>
        <div className="row gtr-150">
          <div className="col-4 col-12-medium">
            <span className="image fit">
              <img src={back} alt="" />
            </span>
            <h3>c1</h3>
            <p>description cours.</p>
            <ul className="actions special">
              <li>
                <a href="#" className="button">
                  plus
                </a>
              </li>
            </ul>
          </div>
          <div className="col-4 col-12-medium">
            <span
            className="image fit">
            <img src={back1} alt="" />
            </span>
            <h3>c2</h3>
            <p>description cours.</p>
            <ul className="actions special">
            <li>
            <a href="#" className="button">
            plus
            </a>
            </li>
            </ul>
            </div>
            <div className="col-4 col-12-medium">
            <span className="image fit">
            <img src={back2} alt="" />
            </span>
            <h3>c3</h3>
            <p>description cours.</p>
            <ul className="actions special">
            <li>
            <a href="#" className="button">
            Plus
            </a>
            </li>
            </ul>
            </div>
            </div>
            </div>
            </section>   
             <section id="four" className="main style2 special">
      <div className="container">
        <header className="major">
          <h2>Contactez-nous</h2>
        </header>
        <p>
          Ne manquez rien, inscrivez-vous maintenant et restez informé sur tout ce qui concerne notre école.
        </p>
        <ul className="actions special">
          <li>
            <a href="#" className="button wide primary">
              Sign Up
            </a>
          </li>
          <li>
            <a href="#" className="button wide">
              Voir plus
            </a>
          </li>
        </ul>
      </div>
    </section>



    <section id="footer">
      <ul className="icons">
        <li>
          <a href="#" className="icon brands alt fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon brands alt fa-facebook-f">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon brands alt fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon brands alt fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon solid alt fa-envelope">
            <span className="label">Email</span>
          </a>
        </li> 
      </ul>
      <ul className="copyright">
        <li>&copy; IKRAMISTA_kaw</li>
        <li>PFA_2023</li>
      </ul>
    </section>

    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/jquery.scrolly.min.js"></script>
    <script src="assets/js/browser.min.js"></script>
    <script src="assets/js/breakpoints.min.js"></script>
    <script src="assets/js/util.js"></script>
    <script src="assets/js/main.js"></script>
  </body>



</>
)
}
export default  Landig_page;