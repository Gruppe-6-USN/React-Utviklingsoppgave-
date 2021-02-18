import React, { useState, useEffect, useRef } from 'react'
import  { db } from "../server/firebase"
import { useAuth } from "../context/authContext";



export default function Nominering(){
    const [brukere, setBruker] = useState("")
    const { nominerBruker, gjeldeneBruker } = useAuth()
    const fornavnRef = useRef()
    const etternavnRef = useRef()

    async function handleSubmit(e){
        e.preventDefault();
        await nominerBruker(fornavnRef.current.value, etternavnRef.current.value)
        console.log(fornavnRef, etternavnRef)
    }
    
    useEffect(() => {
        db.collection('BrukerInfo')
        .where("Nominerbar", "==", true)
        .get()
        .then(snapshot => {
          const documents = snapshot.docs.map(doc => doc.data())
          setBruker(documents);
          console.log(documents)
        })
    }, [])

    return ( 
    <div className="App">
        <div className="row">
        { brukere && brukere.map(bruker => { 
        return(
            <div className="col  m6 card-panel ">
                <form onSubmit={ handleSubmit }>
                    <p ref={ fornavnRef }>{ bruker.Fornavn }</p> 
                    <p ref={ etternavnRef }>{ bruker.Etternavn }</p>
                    <button type="submit" className="btn waves-effect waves-light .center-block">Nominér</button>
                </form>
            </div> 
        )}
        )
        } 
        </div>
    </div>
     );
}
 

