import { storage } from "../server/firebase";
import React, { useState } from "react";
import { useAuth } from "../context/authContext"



export default function App() {
    const [file, setFile] = useState(null);
    const [url, setURL] = useState("");
    const { gjeldeneBruker } = useAuth()
  
    function handleChange(e) {
      setFile(e.target.files[0]);
    }
  
    function handleUpload(e) {
      e.preventDefault();
      const uploadTask = storage.ref('brukere/' + gjeldeneBruker.uid + '/profile.jpg').put(file);
      uploadTask.on("state_changed", console.log, console.error, () => {
        storage.ref('brukere/' + gjeldeneBruker.uid + '/profile.jpg').getDownloadURL().then((url) => {
            setFile(null);
            setURL(url);
          });
      });
    }
  
    return (
    <div className="App">
        <div className="row">
            <div className="col s12 offset-m4 m4 card-panel">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js" />  
                <form runat="server" onSubmit={handleUpload}>
                <p>Last opp/endre profilbilde: </p>
                <input type="file" id="imgInp" onChange={handleChange} />
                <button className="btn waves-effect waves-light right" disabled={!file}>Last opp bilde</button>
                </form>
                <img src={url} alt="" />
            </div>
        </div>
    </div>
    );
}