import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
      apiKey: "AIzaSyANAMlF4kBoupiP5OdqBfks21nHZFwHUM0",
      authDomain: "app2000-dev.firebaseapp.com",
      projectId: "app2000-dev",
      storageBucket: "app2000-dev.appspot.com",
      messagingSenderId: "577336654085",
      appId: "577336654085:web:ce695160acf23a00ad9f6c"
});

export const auth = app.auth();
export default app;