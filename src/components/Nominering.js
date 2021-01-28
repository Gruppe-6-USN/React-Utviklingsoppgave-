import React from 'react'
import  { db, auth } from "../server/firebase"

import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../context/authContext"

class Nominering extends React.Component {
    state = {
        brukere: null
    }

    componentDidMount(){
        console.log('mounted');
        db.collection('BrukerInfo')
          .get()
          .then( snapshot => {
              const brukere = []
              snapshot.forEach(doc => {
                  const data = doc.data()
                  brukere.push(data)
                  
              })
              this.setState({ brukere: brukere })
            console.log(snapshot)
          })
          .catch( error => console.log(error))
    }

    render(){
        return (
            <div className="App">
                <div className="row">
                {
                    this.state.brukere && 
                    this.state.brukere.map( brukere => {
                        return (
                            <div className="col s12 offset-m4 m4 card-panel">
                                <p>{ brukere.Fornavn } { brukere.Etternavn }</p>
                                <button type="submit" className="btn waves-effect waves-light right">Nominér</button>
                            </div>   
                        )
                    })
                }
                </div>
            </div>
        )
    }

}

export default Nominering;