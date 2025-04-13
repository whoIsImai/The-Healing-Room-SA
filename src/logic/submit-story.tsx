import { doc, setDoc, updateDoc, arrayUnion, getFirestore, getDoc } from 'firebase/firestore'
import {app} from '../utils/firebase'
import { getAuth } from 'firebase/auth'
import { FirebaseError } from 'firebase/app';

export type StorySubmission = {
    id: string
    title: string
    content: string
    author: string
    isAnonymous: boolean
    createdAt: Date
  }
  const auth = getAuth(app)
  
  export async function submitStory(formData: FormData) {
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
  
    const user = auth.currentUser

    if (!user) {
      return { success: false, message: "Please sign in to share your story" }
    }
    if (!user.email) {
      return { success: false, message: "Email not found" }
    }
      if (user.email) {
        const db = getFirestore(app);
        const userRef = doc(db, 'stories', user.email)
  
        try {
           await updateDoc(userRef, {
            stories: arrayUnion(newStory),
            name: user.displayName,
          });
        } catch (error) {
          if ((error as FirebaseError).code === 'not-found') {
            await  setDoc(
              userRef,
              {
                stories: [newStory],
                name: user.displayName,
              },
              { merge: true }
            );
          } else {
            return { success: false, message: `Error submitting story: ${error}` }
          }
        }
      } else {
        
        return{
          success: false,
          message: "User not authenticated",
        }
      }

  
    return {
      success: true,
      message: "Your story has been submitted and is pending review. Thank you for sharing your experience.",
    }
  }

  export async function deleteStory(storyId: string) {
    const db = getFirestore(app)
    const user = auth.currentUser
  
    if (!user) throw new Error("User not authenticated")
      if (!user.email) throw new Error("User email not found")
      
      const userRef = doc(db, 'stories', user.email)
      
      try {
        const userSnap = await getDoc(userRef)
      
        if (userSnap.exists()) {
          const userData = userSnap.data()
          const updatedStories = (userData.stories ?? []).filter(
            (story: StorySubmission) => story.id !== storyId
          )
      
          await updateDoc(userRef, { stories: updatedStories })
        } else {
          throw new Error("User document not found")
        }
      } catch (error) {
        console.error("Error deleting story:", error)
        throw error
      }
  }
  