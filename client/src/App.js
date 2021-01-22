import './App.css';
import Navbar from './components/Navbar';
import Avstemming from './components/Avstemming';
import Nominering from './components/Nominering';
import Logginn from './components/Logginn';
import Registrering from './components/Registrering';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Avstemming' component={Avstemming} />
        <Route path='/Nominering' component={Nominering} />
        <Route path='/Logginn' component={Logginn} />
        <Route path='/Registrering' component={Registrering} />
      </Switch>    
    </div>
    </BrowserRouter>
  );
}

export default App;
