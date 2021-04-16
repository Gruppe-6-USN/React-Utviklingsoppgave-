import { NavLink, withRouter, useHistory } from 'react-router-dom';
import React, {useEffect, useState } from 'react'
import { useAuth } from '../context/authContext'
import M from 'materialize-css';



const Navbar = () => {
    const [error, setError] = useState("");
    const { gjeldeneBruker, loggut } = useAuth();
    const history = useHistory();

    useEffect(() => { 
      M.Sidenav.init(document.querySelectorAll('.sidenav'), {});
}, [])


    async function handleLoggut() {
        setError("");

        try {
            await loggut()
            history.push("/Logginn")
        }catch {
            setError("Utlogging mislykkes")
        }
    } if(!gjeldeneBruker){
        return (<div className="App">
      <nav className="deep-purple darken-4">  
      <div className="nav-wrapper container nav">
        
      <a id="logo-container" href="/" className="brand-logo">USN-valget</a>
      <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <div className="">
              <ul className="right hide-on-med-and-down">
        {<li><NavLink to="/Logginn">Logg inn</NavLink></li>}
        {<li><NavLink to="/Registrering">Registrering</NavLink></li>}
        {error && <p>{error}</p>}
        </ul>
        <ul id="nav-mobile" className="sidenav">
        {<li><NavLink to="/Logginn">Logg inn</NavLink></li>}
        {<li><NavLink to="/Registrering">Registrering</NavLink></li>}
        {<button onClick={handleLoggut} className="loggutKnapp btn waves-effect waves-light right">Logg ut</button>}
        </ul>
        </div>
        </div>
        </nav>
        </div> 
        
        )
        

    } else {
    return ( 
    <div className="App">
      <nav className="deep-purple darken-4">  
      <div className="nav-wrapper container nav">
        
      <a id="logo-container" href="/" className="brand-logo">USN-valget</a>
      <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <div className="">
              <ul className="right hide-on-med-and-down">
                {gjeldeneBruker.emailVerified == false && <li><NavLink to="/Logginn">Logg inn</NavLink></li>}
                {gjeldeneBruker.emailVerified == false && <li><NavLink to="/Registrering">Registrering</NavLink></li>}
                  {gjeldeneBruker.emailVerified == true && <li><NavLink to="/">Hjem</NavLink></li>}
                  {gjeldeneBruker.emailVerified == true && <li><NavLink to="/Avstemming">Avstemming</NavLink></li>}
                  {gjeldeneBruker.emailVerified == true && <li><NavLink to="/Nominering">Nominering</NavLink></li>}
                  {gjeldeneBruker.emailVerified == true && <li><NavLink to="/BrukerProfil">Profil</NavLink></li>}
                  {gjeldeneBruker.emailVerified == true && <button onClick={handleLoggut} className="loggutKnapp btn waves-effect waves-light right">Logg ut</button>}
                  {error && <p>{error}</p>}
              </ul>
              
              <ul id="nav-mobile" className="sidenav">
<<<<<<< HEAD
                {gjeldeneBruker && <li><NavLink to="/">Hjem</NavLink></li>}
                  {gjeldeneBruker && <li><NavLink to="/Avstemming">Avstemming</NavLink></li>}
                  {gjeldeneBruker && <li><NavLink to="/Nominering">Nominering</NavLink></li>}
                  {gjeldeneBruker && <li><NavLink to="/BrukerProfil">Profil</NavLink></li>}
                  {!gjeldeneBruker && <li><NavLink to="/Logginn">Logg inn</NavLink></li>}
                  {!gjeldeneBruker && <li><NavLink to="/Registrering">Registrering</NavLink></li>}
                  {gjeldeneBruker && <button onClick={handleLoggut} className="loggutKnapp btn waves-effect waves-light right">Logg ut</button>}
                  {error && <p>{error}</p>}   
=======
              {gjeldeneBruker.emailVerified == false && <li><NavLink to="/Logginn">Logg inn</NavLink></li>}
                {gjeldeneBruker.emailVerified == false && <li><NavLink to="/Registrering">Registrering</NavLink></li>}   
                {gjeldeneBruker.emailVerified == true && <li><NavLink to="/">Hjem</NavLink></li>}
                {gjeldeneBruker.emailVerified == true && <li><NavLink to="/Avstemming">Avstemming</NavLink></li>}
                  {gjeldeneBruker.emailVerified == true && <li><NavLink to="/Nominering">Nominering</NavLink></li>}
                  {gjeldeneBruker.emailVerified == true && <li><NavLink to="/BrukerProfil">Profil</NavLink></li>}
                  {gjeldeneBruker.emailVerified == true && <button onClick={handleLoggut} className="loggutKnapp btn waves-effect waves-light right">Logg ut</button>}
                  {error && <p>{error}</p>}
                  
>>>>>>> 153a975aeca044acdceafd19201e7b7893515ed2
              </ul>
            </div>
            </div>
            </nav> 
      </div>    
      
    
     );
}
}
 
export default withRouter(Navbar);