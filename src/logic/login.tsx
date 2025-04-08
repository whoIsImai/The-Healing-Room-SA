import {app} from "../utils/firebase";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth"

const auth = getAuth(app)



export const login = ()=> {
    onAuthStateChanged(auth, (user) => {
        if (user) {
           return user
        } else {
            signInWithPopup(auth, new GoogleAuthProvider())
    .then((result) => {
       GoogleAuthProvider.credentialFromResult(result)
        const user = result.user
        console.log("User signed in", user)
    })
    .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.customData.email
        const credential = GoogleAuthProvider.credentialFromError(error)
        console.error("Error signing in", errorCode, errorMessage, email, credential)
    }
    ) 
        }
    })

      
} 