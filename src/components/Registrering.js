import React, { useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../context/authContext"


export function Registrering() {
  //Referanser til verdier
  const fornavnRef = useRef()
  const etternavnRef = useRef()
  const emailRef = useRef()
  const passordRef = useRef()
  const passordGjRef = useRef()
  //Setter i bruk useAuth funksjonen i authContext
  const { registrer } = useAuth()
  //Feilmelding state som kan settes der feilmeldinger trenges
  const [error, setError] = useState("")
  //Får å disable ulike ting mens siden loader
  const [loading, setLoading] = useState(false)

  const history = useHistory();
  
  //Funksjon som settes for <form> sår kjører når det blir submittet
  async function handleSubmit(e) {
    e.preventDefault()

    //Hvis passord ikke matcher
    if (passordRef.current.value !== passordGjRef.current.value) {
      return setError("Passord matcher ikke")
    }
    try {
      //Hvis det ikke er noen feil
      setError("")
      setLoading(true)
      await registrer(emailRef.current.value, passordRef.current.value)
      history.push("/Logginn")
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
                <form action="" className="col s12" onSubmit={handleSubmit}>
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
                </form>
                <p>Allerede registrert? <Link to="/Logginn">Logg inn</Link></p>
            </div>
        </div>
    </div>
     );
}
 
export default Registrering;