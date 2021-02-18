import React, { useContext, useState, useEffect } from "react"
import  { auth, db } from "../server/firebase"
import 'firebase/firestore';
import { storage } from "../server/firebase";
import { error } from "jquery";



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
  const [fornavnDisplay, setFornavnDisplay] = useState()
  const [etternavnDisplay, setEtternavnDisplay] = useState()
  const [loading, setLoading] = useState(true)
 
  


  function registrer(email, password, fornavn, etternavn, nominerbar) {
    auth.createUserWithEmailAndPassword(email, password).then( cred => {
      return db.collection('BrukerInfo').doc(cred.user.uid).set({
        Fornavn: fornavn,
        Etternavn: etternavn,
        Nominerbar: nominerbar
      })
    })
    
  }

  function logginn(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function loggut() {
    auth.signOut();
  }

  function glemtPassord(email) {
    return auth.sendPasswordResetEmail(email);
 }

 function uploadBilde(picFile) {
  return storage.ref('brukere/' + gjeldeneBruker.uid + '/profile.jpg').put(picFile);
 }

 function oppdaterMail(email) {
  return gjeldeneBruker.updateEmail(email)
}

function oppdaterPassord(password) {
  return gjeldeneBruker.updatePassword(password)
}

function oppdaterFNavn (fornavn)  {
  return db.collection('BrukerInfo').doc(gjeldeneBruker.uid).update({
    Fornavn: fornavn
  })
}
function oppdaterENavn (etternavn)  {
  return db.collection('BrukerInfo').doc(gjeldeneBruker.uid).update({
    Etternavn: etternavn
  })
}

function oppdaterNom(nominerbar) {
  return db.collection('BrukerInfo').doc(gjeldeneBruker.uid).update({
    Nominerbar: nominerbar
  })
}

  
  //useEffect: Når noe skjer vil vi at en bivirkning skal skje
  //3. Unsubscribe gjør slik at etter eventen har skjedd, stopper serveren å lytte til den
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      console.log(user);
      setGjeldeneBruker(user)
      if(user) {
        db.collection("BrukerInfo").doc(user.uid).onSnapshot(function (doc){
          const firstName = doc.data().Fornavn;
          const lastName = doc.data().Etternavn;
          setFornavnDisplay(firstName);
          setEtternavnDisplay(lastName);
          console.log(firstName, lastName)
       });
      //  storage.ref('brukere/' + user.uid + '/profile.jpg').getDownloadURL().then((url) => {
      //   setPicUrl(url);
      //   user.updateProfile({
      //     photoURL: picUrl
      //   })
      //  })

      }
      setLoading(false)
    })

    return unsubscribe
  }, [])

  //Ulike verdier man gir Provider tilgang til å lytte etter
  const value = {
    gjeldeneBruker,
    fornavnDisplay,
    etternavnDisplay,
    registrer,
    logginn,
    loggut,
    glemtPassord,
    uploadBilde,
    oppdaterPassord,
    oppdaterMail,
    oppdaterFNavn,
    oppdaterENavn,
    oppdaterNom
  }

  return (
      //1. Setter inn all data i Provider som trenger tilgang til informasjon i context
      //2. Alt på innsiden av Provider wrapperen har tilgang til denne informasjonen
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}