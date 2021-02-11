import React, { useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../context/authContext"


import 'firebase/auth';



export function Registrering() {
  //Referanser til verdier
  const fornavnRef = useRef()
  const etternavnRef = useRef()
  const emailRef = useRef()
  const passordRef = useRef()
  const passordGjRef = useRef()
  
  
  //Setter i bruk useAuth funksjonen i authContext
  const { registrer, logginn } = useAuth()
  //Feilmelding state som kan settes der feilmeldinger trenges
  const [error, setError] = useState("")
  //Får å disable ulike ting mens siden loader
  const [loading, setLoading] = useState(false)
  const [checked, setChecked] = useState();

  const history = useHistory();
  
  //Sjekker om Eposten har usn.no i seg
  var reg = /^\w+([-+.']\w+)*@(usn.no)/

 function handleChange(e) {
   setChecked(e.target.checked)
   console.log(checked)
 }
   
  //Funksjon som settes for <form> sår kjører når det blir submittet
  async function handleSubmit(e) {
    e.preventDefault()
  //Sjekker hvis Eposten er usn og endrer alt til lowercase
    if(!reg.test(emailRef.current.value.toLowerCase())){
      return setError("Dette er ikke en usn epost")
    }
    //Hvis passord ikke matcher
    if (passordRef.current.value !== passordGjRef.current.value) {
      return setError("Passord matcher ikke")
    }
    try {
      //Hvis det ikke er noen feil
      setError("")
      setLoading(true)
      await registrer(emailRef.current.value, passordRef.current.value, fornavnRef.current.value, etternavnRef.current.value, checked)
      await logginn(emailRef.current.value, passordRef.current.value)

      history.push("/")
    } catch {
      //Alle feil som ikke har blitt laget feilmelding til går her
      setError("Registrering mislykkes")
    }
    //Stopper loadinger etter alt har gått gjennom
    setLoading(false)
  }
    
      return ( 
    <div className="App">
      <div class="row">
            <div className="col s12 offset-m4 m4 card-panel">
                <h2>Registrer</h2>
                {error && <p>{error}</p>}
                <form action="" className="col s12" onSubmit= {handleSubmit} >
                    <div className="row">
                        <div className="input-field col s12">
                            <input type="text" placeholder="Fornavn" ref={fornavnRef} className="validate"/>
                        </div>
                        <div className="input-field col s12">
                            <input type="text" placeholder="Etternavn" ref={etternavnRef} className="validate"/>
                        </div>
                        <div className="input-field col s12">
                            <input type="email" placeholder="Email" ref={emailRef} className="validate"/>
                        </div>
                        <div className="input-field col s12">
                            <input type="password" placeholder="Passord" ref={passordRef} className="validate"/>
                        </div>
                        <div className="input-field col s12">
                            <input type="password" placeholder="Gjenta Passord" ref={passordGjRef} className="validate"/>
                        </div>
                    </div>
                    <button disabled={loading} type="submit" className="btn waves-effect waves-light right">Registrer</button>
                    <p>
      <label>
        <input type="checkbox" className="filled-in" onChange={handleChange} />
        <span>Filled in</span>
      </label>
    </p>
                </form>
                <p>Allerede registrert? <Link to="/Logginn">Logg inn</Link></p>
            </div>
        </div>
    </div>
     
     );
    }
  
    
export default Registrering;