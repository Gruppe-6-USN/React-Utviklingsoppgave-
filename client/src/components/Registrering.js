import { useState } from 'react';
import axios from 'axios'; 

function App() {
    const [fornavnreg, setFornavn] = useState("");
    const [etternavnreg, setEtternavn] = useState("");
    const [emailreg, setEmail] = useState("");
    const [passordreg, setPassord] = useState("");

   
    const register = () => {
        axios.post('https://itfag.usn.no/phpmyadmin/sql.php?db=233574&server=2&token=63f6a1ed9a42f538edd34b923d597f26&goto=db_structure.php&table=bruker&pos=0', 
        {
        fornavn: fornavnreg, 
        etternavn: etternavnreg, 
        email: emailreg, 
        passord: passordreg 
    }).then((Response)=>  {
        console.log(Response);
    });
    }

    return ( 
    <div className="App">
      <div className="row">
            <div className="col s12 offset-m4 m4 card-panel">
                <form action="" className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input type="text" placeholder="Fornavn" className="validate" onChange={(e) => {setFornavn(e.target.value);}}/>
                        </div>
                        <div className="input-field col s12">
                            <input type="text" placeholder="Etternavn" className="validate" onChange={(e) => {setEtternavn(e.target.value);}}/>
                        </div>
                        <div className="input-field col s12">
                            <input type="email" placeholder="Email" className="validate" onChange={(e) => {setEmail(e.target.value);}}/>
                        </div>
                        <div className="input-field col s12">
                            <input type="password" placeholder="Passord" className="validate" onChange={(e) => {setPassord(e.target.value);}}/>
                        </div>
                        <div className="input-field col s12">
                            <input type="password" placeholder="Gjennta Passord" className="validate"/>
                        </div>
                    </div>
                    <button onClick={register} className="btn waves-effect waves-light right">Registrer</button>
                </form>
            </div>
        </div>
    </div>
     );

    };

export default App;