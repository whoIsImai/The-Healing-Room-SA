import { useEffect, useState } from "react"
import { StorySubmission } from "@/logic/submit-story"
import YourStoryList from "@/logic/your-story-list"
import NavBar from "@/components/ui/NavBar"
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { app } from "@/utils/firebase"
import { getAuth } from "firebase/auth"

  const auth = getAuth(app)

export default function YourStories(){
    const [stories, setStories] = useState<StorySubmission[]>([])

    const user = auth.currentUser
    useEffect(()=> {
        if(user && user.email){
        const fetchStories = async(email : string)=> {
            const db = getFirestore(app)
            const snapshot = await getDocs(collection(db, 'stories', email))

                const data: StorySubmission[] = snapshot.docs.flatMap(doc => {
                    const docData = doc.data()
                    console.log("Doc data:", docData)
                    return (docData.stories ?? []) as StorySubmission[]
                  })
                  setStories(data);
              } 

        fetchStories(user.email)
    }
    })

    return (
        <>
            <NavBar />
        <div className="container py-10 items-center sm:py-20">
          <div className="space-y-8 flex flex-col items-center justify-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Your Stories
              </h1>
              <p className="text-gray-500 md:text-xl">
               Stories submitted by you.
              </p>
            </div>
    
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <YourStoryList stories={stories} />
              </div>
            </div>
          </div>
        </div>
        </>
      )

}