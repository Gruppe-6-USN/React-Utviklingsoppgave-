import { useState } from 'react';

const Registrering = () => {
    const [fornavn, setFornavn] = useState("");
    const [etternavn, setEtternavn] = useState("");
    const [email, setEmail] = useState("");
    const [passord, setPassord] = useState("");

    const hvisInfo = () => {
        console.log(fornavn + " " + etternavn + " " + email + " " + passord);
    }

    return ( 
    <div className="App">
      <div class="row">
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
                    <button onClick={hvisInfo} className="btn waves-effect waves-light right">Registrer</button>
                </form>
            </div>
        </div>
    </div>
     );
}
 
export default Registrering;