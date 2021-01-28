import './App.css';
import Navbar from './components/Navbar';
import Avstemming from './components/Avstemming';
import Nominering from './components/Nominering';
import Logginn from './components/Logginn';
import Registrering from './components/Registrering';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import { AuthProvider } from './context/authContext'
import  PrivateRoute  from './components/PrivateRoute'
import BrukerProfil from './components/BrukerProfil'

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <PrivateRoute exact path='/' component={Home} />
        <PrivateRoute path='/Avstemming' component={Avstemming} />
        <PrivateRoute path='/Nominering' component={Nominering} />
        <PrivateRoute path='/BrukerProfil' component={BrukerProfil} />
        <Route path='/Logginn' component={Logginn} />
        <Route path='/Registrering' component={Registrering} />
      </Switch>
    </div>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
