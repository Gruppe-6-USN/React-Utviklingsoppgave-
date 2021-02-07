import React from 'react'
import  { db} from "../server/firebase"



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
                            <div className="col  m6 card-panel ">
                                <p>{ brukere.Fornavn } { brukere.Etternavn }</p>
                                <button type="submit" className="btn waves-effect waves-light .center-block">Nominér</button>
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