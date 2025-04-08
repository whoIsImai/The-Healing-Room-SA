import {app} from "../utils/firebase"
import { getAuth
    
 } from "firebase/auth"
const auth = getAuth(app)

export const logout = async () => {
    try {
        await auth.signOut()
       return
    } catch (error) {
       return error
    }
}