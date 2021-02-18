import React, { useState, useEffect } from 'react'
import  { db } from "../server/firebase"



export default function Nominering(){
    const [brukere, setBruker] = useState("")
    
    
    useEffect(() => {
        db.collection('BrukerInfo')
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
                                <p>{ bruker.Fornavn } { bruker.Etternavn }</p>
                                <button type="submit" className="btn waves-effect waves-light .center-block">Nominér</button>
                                </div> 
                                )}
                        )
                        } 

        </div>
    </div>
     );
}
 

