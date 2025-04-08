import { getStories } from "../logic/submit-story"
import StoryForm from "../logic/Story-form"
import StoryList from "../logic/Story-list"

export default async function Stories() {
  const stories = await getStories()

  return (
    <div className="container py-10">
      <div className="space-y-8">
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
  )
}

