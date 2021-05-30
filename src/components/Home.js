import React, { useState } from 'react'
import { useAuth } from '../context/authContext'



export function Home(){
    const { gjeldeneBruker  } = useAuth();


    



       


    return ( 
    <div className="App">
        <div className="row">
            <div className="col s12 offset-m4 m4 card-panel">
                <div class = "background">
                    <div class ="stor-text">VELKOMMEN TIL USN VALGET</div>
                    <div class ="liten-text">GRUPPE 6 PRESENTERER</div>
                    <div class="stor-text">EN NOMINERINGS APP</div>
                    <div class ="liten-text"> I denne appen så skal dere velge fram en eller flere personer og stemme på hvilken person man vil ha som dette årets studentrådrepresentant</div>
                    <div class="stor-text">For å nominere en person så må du:</div>
                    <div class ="liten-text">Gå til nominering tabben i toppen av appen og velger den personen du eventuelt tenker at best kan passe som studentrådrepresentant. for å avkaste din stemme så går du til avstemming</div>
                    <div class="stor-text">Du kan kun stemme på en person</div>
                </div>
            

            
                
                
                  
            </div>
        </div>
    </div>
     
     );
     

     
}
 
export default Home;