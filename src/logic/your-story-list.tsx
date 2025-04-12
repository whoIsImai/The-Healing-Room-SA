import { StorySubmission, deleteStory } from "./submit-story"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Trash2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export default function YourStoryList({ stories }: { stories: StorySubmission[] }) {
    if (stories.length === 0) {
        return (
          <div className="text-center py-12">
            <p className="text-gray-500">You have no stories shared.</p>
          </div>
        )
      }

  return (
    <div className="space-y-8 ml-4">
      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Your Stories</AlertTitle>
        <AlertDescription>
        The Following Stories are stories you uploaded
        </AlertDescription>
      </Alert>

      {stories.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </div>
  )
}

function StoryCard({ story }: { story: StorySubmission }) {
  const formattedDate = new Intl.DateTimeFormat("en-ZA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format()

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
      <CardFooter>
        <Button onClick={() => deleteStory(story.id)}>
          <Trash2 className="w-4 h-4"/>
        </Button>
      </CardFooter>
    </Card>
  )
}

