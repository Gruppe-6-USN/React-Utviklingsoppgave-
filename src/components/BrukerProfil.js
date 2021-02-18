import React, { useRef, useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useHistory } from "react-router-dom"



export default function App() {
    const [file, setFile] = useState(null);
    const { uploadBilde } = useAuth();
    const [error, setError] = useState("");
    //Får å disable ulike ting mens siden loader
    const [loading, setLoading] = useState(false);
    const { gjeldeneBruker, fornavnDisplay, etternavnDisplay, oppdaterMail, oppdaterPassord, oppdaterFNavn, oppdaterENavn } = useAuth();
    const fornavnRef = useRef()
    const etternavnRef = useRef()
    const emailRef = useRef()
    const passordRef = useRef()
    const passordGjRef = useRef()
    const history = useHistory()
    
    //Sjekker om Eposten har usn.no i seg
    var reg = /^\w+([-+.']\w+)*@(usn.no)/

  
    function handleChange(e) {
      setFile(e.target.files[0]);
    }
  
    async function handleUpload(e) {
      e.preventDefault();
      try {
      setError("")
      setLoading(true)        
      await uploadBilde(file);
      } catch {
        setError("Opplastning mislykkes")
      }
      setLoading(false)
    }

    function handleSubmit(e) {
      e.preventDefault()
      //Sjekker hvis Eposten er usn og endrer alt til lowercase
      if(!reg.test(emailRef.current.value.toLowerCase())){
        return setError("Dette er ikke en usn epost")
      }

      //Skjekker om passordene er like
      if (passordRef.current.value !== passordGjRef.current.value) {
        return setError("Passord matcher ikke")
      }
      
      //Array med regler
      const regler = []
      setLoading(true)
      setError("")
      
      //Skjekker at den nye mailen som blir tastet inn ikke er lik den gjeldene mailen
      if (emailRef.current.value !== gjeldeneBruker.email) {
        //Hvis spørringen over er true blir den nye mailen lagt inn som ny mail i arrayet
        regler.push(oppdaterMail(emailRef.current.value))
      }
      //Skjekker om passord blir endret hvis det endtres legges det inn i arrayet
      if (passordRef.current.value) {
        regler.push(oppdaterPassord(passordRef.current.value))
      }
      //Skjekker om Fornavnet blir endret hvis det endtres legges det inn i arrayet
      if (fornavnRef.current.value) {
        regler.push(oppdaterFNavn(fornavnRef.current.value))
      }
      //Skjekker om Etternavn blir endret hvis det endtres legges det inn i arrayet
      if (etternavnRef.current.value) {
        regler.push(oppdaterENavn(etternavnRef.current.value))
      }
  
      Promise.all(regler)
        //Hvis alle reglene er oppfylt blir man sendt til hjem siden
        .then(() => {
          history.push("/")
        })
        //Hvis reglene ikke oppfylles blir denne errormeldingen sendt
        .catch(() => {
          setError("Mislykket ved oppdatering av profil! Prøv på nytt")
        })
        .finally(() => {
          setLoading(false)
        })
    }
  
    return (
    <div className="App">
        <div className="row">
            <div className="col s12 offset-m4 m4 card-panel">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js" />  
                <form runat="server" onSubmit={handleUpload}>
                <p>Last opp/endre profilbilde: </p>
                <input type="file" id="imgInp" onChange={handleChange} />
                <button disabled={loading} className="btn waves-effect waves-light right" disabled={!file}>Last opp bilde</button>
                {error && <p> {error} </p> }
                <br></br>
                <img src={gjeldeneBruker.photoURL} width="100" height="100" alt="avatar"/>
                </form>
                <h2>Oppdater Profil</h2>
                {error && <p>{error}</p>}
                <form action="" className="col s12" onSubmit= {handleSubmit} >
                    <div className="row">
                        <div className="input-field col s12">
                            <input 
                              type="text" 
                              placeholder="Fornavn" 
                              ref={fornavnRef} 
                              className="validate"
                            />
                        </div>
                        <div className="input-field col s12">
                            <input 
                              type="text" 
                              placeholder="Etternavn" 
                              ref={etternavnRef} 
                              className="validate"
                            />
                        </div>
                        <div className="input-field col s12">
                            <input 
                              type="email" 
                              defaultValue={gjeldeneBruker.email}
                              ref={emailRef} 
                              className="validate"
                              required
                            />
                        </div>
                        <div className="input-field col s12">
                            <input 
                              type="password" 
                              placeholder="Passord" 
                              ref={passordRef} 
                              className="validate"/>
                        </div>
                        <div className="input-field col s12">
                            <input 
                              type="password" 
                              placeholder="Gjenta Passord" 
                              ref={passordGjRef} 
                              className="validate"
                            />
                        </div>
                    </div>
                    <button disabled={loading} type="submit" className="btn waves-effect waves-light right">Oppdater</button>
                    <Link to="/">Avslutt</Link>
                </form>
            </div>
            </div>
        </div>
    );
}