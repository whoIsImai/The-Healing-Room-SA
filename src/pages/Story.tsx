import {  collection, getDocs, getFirestore } from 'firebase/firestore'
import StoryForm from "../logic/Story-form"
import StoryList from "../logic/Story-list"
import NavBar from "../components/ui/NavBar"
import { StorySubmission } from "../logic/submit-story"
import { useState, useEffect} from 'react'
import { app } from '../utils/firebase'

export default function Stories() {
  const [stories, setStories] = useState<StorySubmission[]>([])

  useEffect(() => {
    const fetchStories = async () => {
      const db = getFirestore(app);
      const snapshot = await getDocs(collection(db, 'stories'));
  
      console.log("Fetched stories:", snapshot.size);
  
      const data: StorySubmission[] = snapshot.docs.flatMap(doc => {
        const docData = doc.data();
        console.log("Doc data:", docData);
        return (docData.stories ?? []) as StorySubmission[];
      });
  
      setStories(data);
    };

    fetchStories();
  }, [])

  return (
    <>
        <NavBar />
    <div className="container py-10 items-center sm:py-20">
      <div className="space-y-8 flex flex-col items-center justify-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Stories of Survival & Resilience
          </h1>
          <p className="text-gray-500 md:text-xl">
            Real experiences shared by survivors to inspire hope and raise awareness.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <StoryList stories={stories} />
          </div>

          <div className="lg:col-span-1">
            <StoryForm />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

