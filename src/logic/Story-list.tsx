import type { StorySubmission } from "./submit-story"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Heart, MessageSquare, Share2 } from "lucide-react"
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
    <div className="space-y-8">
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
    <Card>
      <CardHeader>
        <CardTitle>{story.title}</CardTitle>
        <CardDescription>
          Shared by {story.author} on {formattedDate}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="prose prose-rose max-w-none">
          {story.content.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex space-x-4">
          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-rose-600">
            <Heart className="mr-1 h-4 w-4" />
            Support
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-500">
            <MessageSquare className="mr-1 h-4 w-4" />
            Comment
          </Button>
        </div>
        <Button variant="ghost" size="sm" className="text-gray-500">
          <Share2 className="mr-1 h-4 w-4" />
          Share
        </Button>
      </CardFooter>
    </Card>
  )
}

