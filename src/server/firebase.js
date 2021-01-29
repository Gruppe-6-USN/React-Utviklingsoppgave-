import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"
<<<<<<< HEAD
=======
import "firebase/storage"

>>>>>>> fbb29af4c114b458d9defecfdb4b77d27cb9aea0
const app = firebase.initializeApp({
      apiKey: "AIzaSyANAMlF4kBoupiP5OdqBfks21nHZFwHUM0",
      authDomain: "app2000-dev.firebaseapp.com",
      projectId: "app2000-dev",
      storageBucket: "app2000-dev.appspot.com",
      messagingSenderId: "577336654085",
      appId: "577336654085:web:ce695160acf23a00ad9f6c"
});

export const auth = app.auth();
<<<<<<< HEAD
export const db = app.firestore();
=======
export const db = firebase.firestore();
/* export const storage = firebase.storage(); */ //connection til firebase storage
>>>>>>> fbb29af4c114b458d9defecfdb4b77d27cb9aea0
export default app;