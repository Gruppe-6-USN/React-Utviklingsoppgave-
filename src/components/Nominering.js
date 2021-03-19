import React, { useState, useEffect, useRef } from 'react'
import  { db } from "../server/firebase"
import { useAuth } from "../context/authContext";



export default function Nominering(){
    const [brukere, setBruker] = useState("")
    const { nominerBruker, setNominerbar, gjeldeneBruker } = useAuth()
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
        await setNominerbar(brukerFinner.Fornavn, brukerFinner.Etternavn, brukerFinner.id)
        console.log(brukerFinner.Fornavn, brukerFinner.Etternavn, brukerFinner.id)
        window.location.reload()
    }

    return ( 
    <div className="App">
        <div className="row">
        <h3>Nominér en kandidat</h3>
        <p>Trykk på "nominér" for å nominere en kandidat. Kandidaten vil da bli registrert for avstemming.</p>
        { brukere && brukere.map(bruker => {
        return(
            <div className="col width-margin m6 card-panel nominerKort" key= {bruker.id} >
                <p ref={ fornavnRef } > { bruker.Fornavn } </p>
                <p ref={ etternavnRef } > { bruker.Etternavn } </p>
                <button className="float-right" onClick= { () => handleSubmit(bruker.id) } >Nominér</button> 
            </div>
        )}
        )
        } 
        </div>
    </div>
     );
}
 

