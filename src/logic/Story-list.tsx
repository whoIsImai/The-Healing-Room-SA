import type { StorySubmission } from "./submit-story"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function StoryList({ stories }: { stories: StorySubmission[] }) {
  if (stories.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No stories have been shared yet. Be the first to share your experience.</p>
      </div>
    )
  }

  return (
    <div className="space-y-8 ml-4">
      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Content Warning</AlertTitle>
        <AlertDescription>
          These stories contain personal accounts of gender-based violence that may be difficult to read. Please
          practice self-care while engaging with this content.
        </AlertDescription>
      </Alert>

      {stories.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </div>
  )
}

function StoryCard({ story }: { story: StorySubmission }) {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(story.createdAt)

  return (
    <Card className="w-full max-w-sm md:max-w-md lg:max-w-lg">
      <CardHeader className="w-full">
        <CardTitle>{story.title}</CardTitle>
        <CardDescription>
          Shared by {story.author} on {formattedDate}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 w-full">
        <div className="prose prose-rose prose-sm max-w-none w-full break-words">
          {story.content.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

