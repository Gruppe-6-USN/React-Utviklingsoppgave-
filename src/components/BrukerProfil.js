import { storage } from "../server/firebase";
import React, { useState } from "react";


export function UpdateUser() {
    const [file, setFile] = useState(null);
    const [url, setURL] = useState("");

    
  

    
    
    async function handleChange(e) {
      setFile(e.target.files[0]);
    }
  
    return (
    <div className="App">
        <div className="row">
            <div className="col s12 offset-m4 m4 card-panel">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js" />  
                <form runat="server" onSubmit={uploadBilde}>
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

export default uploadBilde;