import firebase from  'firebase/compat/app'
import  'firebase/compat/auth'

export const auth=firebase.initializeApp(
 {
        apiKey: "AIzaSyAI9dwIuYaKdz0jecEviKGHcYK1LYLxi80",
        authDomain: "letchat-6891a.firebaseapp.com",
        projectId: "letchat-6891a",
        storageBucket: "letchat-6891a.appspot.com",
        messagingSenderId: "403833590375",
        appId: "1:403833590375:web:ac54869d7e3c2557d0fac2"
      }
).auth()