import type { StorySubmission } from "../logic/submit-story"


export function yourStories({ stories }: { stories: StorySubmission[] }){
    if (stories.length === 0) {
        return (
          <div className="text-center py-12">
            <p className="text-gray-500">You have no stories have been shared.</p>
          </div>
        )
      }
}