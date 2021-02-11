import React, { useState } from 'react'
import { useAuth } from '../context/authContext'
import { storage } from "../server/firebase";



export function Home(){
    const { gjeldeneBruker, fornavnDisplay, etternavnDisplay  } = useAuth();
    const [picUrl, setPicUrl] = useState()
    
   

    storage.ref('brukere/' + gjeldeneBruker.uid + '/profile.jpg').getDownloadURL().then((url) => {
        setPicUrl(url);
        gjeldeneBruker.updateProfile({
          photoURL: picUrl
        })
       })
  

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
                <br/>
                { gjeldeneBruker.photoURL && <img src={ gjeldeneBruker.photoURL } width="100" height="100" alt="avatar"/> }
               
                  
            </div>
        </div>
    </div>
     );
}
 
export default Home;