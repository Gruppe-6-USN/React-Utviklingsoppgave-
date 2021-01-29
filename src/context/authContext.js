import React, { useContext, useState, useEffect } from "react"
import  { auth, db } from "../server/firebase"
import 'firebase/firestore';
import Registrering from "../components/Registrering";


//Når nye komponenter blir tatt frem lytter de til context objektet laget her
const AuthContext = React.createContext()

//Gir tilgang til verdiene i andre komponenter
export function useAuth() {
  return useContext(AuthContext)
}

//1. Dette er informasjon som vi ønsker at skal få tilgang til context
//2. gjeldeneBruker håndtere alle bruker attributter. f.eks. info ved registrering og state til ulike komponenter

export function AuthProvider({ children }) {
  const [gjeldeneBruker, setGjeldeneBruker] = useState()
  const [loading, setLoading] = useState(true)


  function registrer(email, password, fornavn, etternavn) {
    auth.createUserWithEmailAndPassword(email, password).then( cred => {
      return db.collection('BrukerInfo').doc(cred.user.uid).set({
        Fornavn: fornavn,
        Etternavn: etternavn
      })
    })
    
  }

  function logginn(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function loggut() {
    auth.signOut();
  }
  
  //useEffect: Når noe skjer vil vi at en bivirkning skal skje
  //3. Unsubscribe gjør slik at etter eventen har skjedd, stopper serveren å lytte til den
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      //console.log(user);
      setGjeldeneBruker(user)
      setLoading(false)

    })

    return unsubscribe
  }, [])

  //Ulike verdier man gir Provider tilgang til å lytte etter
  const value = {
    gjeldeneBruker,
    registrer,
    //registrerBrukerinfo,
    logginn,
    loggut
    
  }

  return (
      //1. Setter inn all data i Provider som trenger tilgang til informasjon i context
      //2. Alt på innsiden av Provider wrapperen har tilgang til denne informasjonen
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}