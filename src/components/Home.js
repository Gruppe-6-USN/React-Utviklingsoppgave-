import React, { useState } from 'react'
import { useAuth } from '../context/authContext'
import { storage } from "../server/firebase";
import poster from './poster.jpg';


export function Home(){
    const { gjeldeneBruker, fornavnDisplay, etternavnDisplay  } = useAuth();
    const [picUrl, setPicUrl] = useState()

    
   

    storage.ref('brukere/' + gjeldeneBruker.uid + '/profile.jpg').getDownloadURL().then((url) => {
        setPicUrl(url);
        gjeldeneBruker.updateProfile({
          photoURL: picUrl
        
        
        })
       })

       async function handleImageError (e) { <img src={'defaultimage/default.png'} width="100" height="100" alt="avatar" /> }
    




       
  

    return ( 
    <div className="App">
        <div className="row">
            <div className="col s12 offset-m4 m4 card-panel">
                
                <br/>
                <p>Du er logget inn som: </p>
                { gjeldeneBruker.photoURL && <img src={ gjeldeneBruker.photoURL } onError={handleImageError} width="100" height="100" alt="avatar" className="circle"/> }
                <br/>
                 {fornavnDisplay}
                &nbsp;&nbsp;
                 {etternavnDisplay}
                <br/>
                <strong>Email: </strong> {gjeldeneBruker.email}
                
                
            <img src= {poster} width="100%" height="auto" alt="poster"/>

            
                
                
                  
            </div>
        </div>
    </div>
     
     );
     

     
}
 
export default Home;