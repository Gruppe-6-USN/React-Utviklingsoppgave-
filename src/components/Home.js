import React from 'react'
import { useAuth } from '../context/authContext'



export function Home(){
    const { gjeldeneBruker, fornavnDisplay, etternavnDisplay  } = useAuth();
    
   

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
                { gjeldeneBruker.photoURL && <img src={ gjeldeneBruker.photoURL }/> }
               
                  
            </div>
        </div>
    </div>
     );
}
 
export default Home;