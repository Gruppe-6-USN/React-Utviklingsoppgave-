import React, { useState } from "react";
import { useAuth } from "../context/authContext"



export default function App() {
    const [file, setFile] = useState(null);
    const { uploadBilde } = useAuth();
    const [error, setError] = useState("");
    //Får å disable ulike ting mens siden loader
    const [loading, setLoading] = useState(false);
    const { gjeldeneBruker, fornavnDisplay, etternavnDisplay  } = useAuth();

  
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
      // const uploadTask = storage.ref('brukere/' + gjeldeneBruker.uid + '/profile.jpg').put(file);
      // uploadTask.on("state_changed", console.log, console.error, () => {
      //   storage.ref('brukere/' + gjeldeneBruker.uid + '/profile.jpg').getDownloadURL().then((url) => {
      //       setFile(null);
      //       setURL(url);
      //     });
      // });
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
            </div>
        </div>
    </div>
    );
}