import { NavLink, withRouter } from 'react-router-dom';

const Navbar = () => {
    return ( 
    <div className="App">
      <nav className="deep-purple darken-4">  
      <div className="nav-wrapper container">
      <a id="logo-container" href="/"  className="brand-logo">USN valget</a>
          <div className="">
              <ul className="right hide-on-med-and-down">
                  <li><NavLink to="/">Hjem</NavLink></li>
                  <li><NavLink to="/Avstemming">Avstemming</NavLink></li>
                  <li><NavLink to="/Nominering">Nominering</NavLink></li>
                  <li><NavLink to="/Logginn">Logg inn</NavLink></li>
                  <li><NavLink to="/Registrering">Registrering</NavLink></li>
              </ul>
              <ul id="nav-mobile" className="sidenav">
                  <li><NavLink to="/">Hjem</NavLink></li>
                  <li><NavLink to="/Avstemming">Avstemming</NavLink></li>
                  <li><NavLink  to="/Nominering">Nominering</NavLink></li>
                  <li><NavLink to="/Logginn">Logg inn</NavLink></li>
                  <li><NavLink to="/Registrering">Registrering</NavLink></li>
              </ul>
              <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            </div>
        </div> 
      </nav>   
      </div>      
    
     );
}
 
export default withRouter(Navbar);