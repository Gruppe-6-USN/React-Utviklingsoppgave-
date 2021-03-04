import React, { useState, useEffect, useRef } from 'react'
import  { db } from "../server/firebase"
import { useAuth } from "../context/authContext";



export default function Nominering(){
    const [brukere, setBruker] = useState("")
    const { nominerBruker, gjeldeneBruker } = useAuth()
    const fornavnRef = useRef()
    const etternavnRef = useRef()

    
    
    useEffect(() => {
        db.collection('BrukerInfo')
        .where("Nominerbar", "==", true)
        .get()
        .then(snapshot => {
          const documents = snapshot.docs.map(doc => doc.data())
          setBruker(documents);
          //console.log(documents)
        })
    }, [])


    async function handleSubmit(id){
        //e.preventDefault();
        const brukerFinner = brukere.find(bruker => bruker.id === id)
        await nominerBruker(brukerFinner.Fornavn, brukerFinner.Etternavn, brukerFinner.id )
        console.log(brukerFinner.Fornavn, brukerFinner.Etternavn, brukerFinner.id)
    }

    return ( 
    <div className="App">
        <div className="row">
        { brukere && brukere.map(bruker => { 
        return(
            <div className="col  m6 card-panel" key= {bruker.id} >
                <p ref={ fornavnRef } > { bruker.Fornavn } </p>
                <p ref={ etternavnRef } > { bruker.Etternavn } </p>
                <button onClick= { () => handleSubmit(bruker.id) } >Nominér</button> 
            </div>
        )}
        )
        } 
        </div>
    </div>
     );
}
 

