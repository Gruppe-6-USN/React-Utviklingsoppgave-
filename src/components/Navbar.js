import { NavLink, withRouter, useHistory } from 'react-router-dom';
import React, { useState } from 'react'
import { useAuth } from '../context/authContext'


const Navbar = () => {
    const [error, setError] = useState("");
    const { gjeldeneBruker, loggut } = useAuth();
    const history = useHistory();

    async function handleLoggut() {
        setError("");

        try {
            await loggut()
            history.push("/Logginn")
        }catch {
            setError("Utlogging mislykkes")
        }
    }
    return ( 
    <div className="App">
      <nav className="deep-purple darken-4">  
      <div className="nav-wrapper container nav">
    
      <a id="logo-container" href="/"  className="brand-logo">USN-valget</a>
          <div className="">
              <ul className="right hide-on-med-and-down">
                  {gjeldeneBruker && <li><NavLink to="/">Hjem</NavLink></li>}
                  {gjeldeneBruker && <li><NavLink to="/Avstemming">Avstemming</NavLink></li>}
                  {gjeldeneBruker && <li><NavLink to="/Nominering">Nominering</NavLink></li>}
                  {gjeldeneBruker && <li><NavLink to="/BrukerProfil">Profil</NavLink></li>}
                  {!gjeldeneBruker && <li><NavLink to="/Logginn">Logg inn</NavLink></li>}
                  {!gjeldeneBruker && <li><NavLink to="/Registrering">Registrering</NavLink></li>}
                  {gjeldeneBruker && <button onClick={handleLoggut} className="loggutKnapp btn waves-effect waves-light right">Logg ut</button>}
                  {error && <p>{error}</p>}
              </ul>
              
              <ul id="nav-mobile" className="sidenav">
                {gjeldeneBruker && <li><NavLink to="/">Hjem</NavLink></li>}
                  {gjeldeneBruker && <li><NavLink to="/Avstemming">Avstemming</NavLink></li>}
                  {gjeldeneBruker && <li><NavLink to="/Nominering">Nominering</NavLink></li>}
                  {gjeldeneBruker && <li><NavLink to="/BrukerProfil">Profil</NavLink></li>}
                  {!gjeldeneBruker && <li><NavLink to="/Logginn">Logg inn</NavLink></li>}
                  {!gjeldeneBruker && <li><NavLink to="/Registrering">Registrering</NavLink></li>}
                  {gjeldeneBruker && <button onClick={handleLoggut} className="loggutKnapp btn waves-effect waves-light right">Logg ut</button>}
                  {error && <p>{error}</p>}
                  
              </ul>
              <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              
            </div>
            </div>
            </nav> 
      </div>      
    
     );
}
 
export default withRouter(Navbar);