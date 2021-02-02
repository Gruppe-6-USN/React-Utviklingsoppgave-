import React, { useState } from 'react'
import { useAuth } from '../context/authContext'
import  { db } from "../server/firebase"


export function Home(){
    const { gjeldeneBruker, fornavnDisplay, etternavnDisplay } = useAuth();
   


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
            </div>
        </div>
    </div>
     );
}
 
export default Home;