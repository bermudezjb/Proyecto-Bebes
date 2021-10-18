// FIREBASE LOGIN
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyBfn_U-pzudLQapoIDBLw9rlIcJU1avtXk",
  authDomain: "webparabebes-93e44.firebaseapp.com",
  projectId: "webparabebes-93e44",
  storageBucket: "webparabebes-93e44.appspot.com",
  messagingSenderId: "379028867863",
  appId: "1:379028867863:web:0e208c8a595bc2a0ed0552"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// CREAR USUARIO

document.getElementById("buttonSubmit").addEventListener("click",()=>{
    let email = document.getElementById("rUsuario").value
    let password = document.getElementById("rPassword").value
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log("Creado correctamente")
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage)
    });
    
})

// LOGIN

document.getElementById("buttonLogin").addEventListener("click",()=>{
    let email = document.getElementById("lUsuario").value
    let password = document.getElementById("lPassword").value
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log("Login CORRECTO")
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage)
    });
})

// SIGN OUT


document.getElementById("buttonLoginOut").addEventListener("click", ()=>{
    signOut(auth).then(() => {
      console.log("Ya NO estas logeado")
    }).catch((error) => {
        console.log("Erroooooor")
    });

})