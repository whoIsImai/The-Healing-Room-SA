import { doc, setDoc, updateDoc, arrayUnion, getFirestore, arrayRemove } from 'firebase/firestore'
import {app} from '../utils/firebase'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { login } from './login'


let userRef
export type StorySubmission = {
    id: string
    title: string
    content: string
    author: string
    isAnonymous: boolean
    createdAt: Date
  }
  const auth = getAuth(app)
 
  
  export function submitStory(formData: FormData) {
    // Add validation here
    const title = formData.get("title") as string
    const content = formData.get("content") as string
    const author = formData.get("author") as string
    const isAnonymous = formData.get("anonymous") === "on"
  
    // Validate inputs
    if (!title || title.length < 3) {
      return { success: false, message: "Please provide a title (minimum 3 characters)" }
    }
  
    if (!content || content.length < 20) {
      return { success: false, message: "Please provide your story (minimum 20 characters)" }
    }
  
    if (!isAnonymous && (!author || author.length < 2)) {
      return { success: false, message: "Please provide your name or check the anonymous option" }
    }
  
    // Create new story
    const newStory: StorySubmission = {
      id: Date.now().toString(),
      title,
      content,
      author: isAnonymous ? "Anonymous" : author,
      isAnonymous,
      createdAt: new Date()
    }
  
    //this should save to a database
    onAuthStateChanged(auth, async (user) => {
      if (user && user.email){
        const db = getFirestore(app)
        userRef = doc(db, 'stories', user.email)
        try {
          await updateDoc(userRef, {
            stories: arrayUnion(newStory),
            name: user.displayName
        })
        } catch(error: unknown ) {
          if((error as { code: string }).code === 'not-found') {
            //incase the user is not in the db we set the user
            await setDoc(userRef, {
              stories: arrayUnion(newStory),
              name: user.displayName
            }, {merge: true})}
      }}else{
        return(<>
          <h1>Not logged in</h1>
          <p>Please log in to submit your story.</p>
          <button onClick={login}>Sign in with Google</button>
        </>)
   }})

  
    // Revalidate the stories page to show the updated list
    //revalidatePath("/stories")
  
    return {
      success: true,
      message: "Your story has been submitted and is pending review. Thank you for sharing your experience.",
    }
  }

  export async function deleteStory(storyId: string) {
    const db = getFirestore(app)
    const user = auth.currentUser
    if (!user) {
      throw new Error("User not authenticated")
    }
    if (!user.email) throw new Error("User email not found");
    const userRef = doc(db, 'stories', user.email)
    try {
      await updateDoc(userRef, {
        stories: arrayRemove({ id: storyId })
      })
    } catch (error) {
      console.error("Error deleting story:", error)
      throw error
    }
  }
  