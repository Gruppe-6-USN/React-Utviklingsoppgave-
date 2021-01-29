import React, { useState } from 'react'
import { useAuth } from '../context/authContext'
import { Link, useHistory } from 'react-router-dom' 


export function Home(){
    const { gjeldeneBruker } = useAuth();



    return ( 
    <div className="App">
        <div className="row">
            <div className="col s12 offset-m4 m4 card-panel">
                <p>Du er logget inn som: </p>
                <strong>Email: </strong> {gjeldeneBruker.email}
                <br/>
                <strong>UID: </strong>{gjeldeneBruker.uid}    
            </div>
        </div>
    </div>
     );
}
 
export default Home;