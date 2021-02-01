import React, { useState } from 'react'
import { useAuth } from '../context/authContext'
import  { db } from "../server/firebase"


export function Home(){
    const { gjeldeneBruker } = useAuth();
    const [fornavn, setFornavn] = useState()
    const [etternavn, setEtternavn] = useState()

    db.collection("BrukerInfo").doc(gjeldeneBruker.uid).onSnapshot(function (doc){
       const firstName = doc.data().Fornavn;
       const lastName = doc.data().Etternavn;
       setFornavn(firstName);
       setEtternavn(lastName);
       console.log(firstName, lastName)
    })



    return ( 
    <div className="App">
        <div className="row">
            <div className="col s12 offset-m4 m4 card-panel">
                <p>Du er logget inn som: </p>
                <strong>Fornavn: </strong> {fornavn}
                <br/>
                <strong>Etternavn: </strong> {etternavn}
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