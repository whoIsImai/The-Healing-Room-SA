import {app} from "../utils/firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export const  login = async()=> {

    try {
        const result = await signInWithPopup(auth, provider)
        const user = result.user
        return user
    } catch (error) {
        return error
    }
      
} 