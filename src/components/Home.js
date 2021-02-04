import React, { useState } from 'react'
import { useAuth } from '../context/authContext'
import  { db } from "../server/firebase"
import { storage } from "../server/firebase";


export function Home(){
    const { gjeldeneBruker, fornavnDisplay, etternavnDisplay } = useAuth();
    const [url, setURL] = useState(null);
   

    // storage.ref('brukere/' + gjeldeneBruker.uid + '/profile.jpg').getDownloadURL().then((url) => {
    //     setURL(url);
    //   });
  

    return ( 
    <div className="App">
        <div className="row">
            <div className="col s12 offset-m4 m4 card-panel">
                <p>Du er logget inn som: </p>
                <strong>Fornavn: </strong> {fornavnDisplay}
                <br/>
                <strong>Etternavn: </strong> {etternavnDisplay}
                <br/>
                <strong>Email: </strong> {gjeldeneBruker.email}
                <br/>
                <strong>UID: </strong>{gjeldeneBruker.uid}
                {/* {url && <img src={url} alt="" />} */}
                  
            </div>
        </div>
    </div>
     );
}
 
export default Home;