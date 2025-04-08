import { useState } from "react"
import { submitStory } from "./submit-story"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertCircle, Send, Shield } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function StoryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formResponse, setFormResponse] = useState<{
    success: boolean
    message: string
  } | null>(null)
  const [isAnonymous, setIsAnonymous] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setFormResponse(null)

    try {
      const response = await submitStory(formData)
      setFormResponse(response)

      if (response.success) {
        // Reset form on success
        const form = document.getElementById("story-form") as HTMLFormElement
        form.reset()
        setIsAnonymous(false)
      }
    } catch (error) {
      setFormResponse({
        success: false,
        message: "An error occurred. Please try again later.",
      })
      console.error("Error submitting story:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Share Your Story</CardTitle>
        <CardDescription>
          Your experience can help others feel less alone and raise awareness about gender-based violence.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="story-form" action={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" placeholder="Give your story a title" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Your Story</Label>
            <Textarea
              id="content"
              name="content"
              placeholder="Share your experience..."
              className="min-h-[150px]"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="author">Your Name</Label>
            <Input
              id="author"
              name="author"
              placeholder="How you'd like to be identified"
              disabled={isAnonymous}
              required={!isAnonymous}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="anonymous"
              name="anonymous"
              checked={isAnonymous}
              onCheckedChange={(checked) => setIsAnonymous(checked === true)}
            />
            <Label htmlFor="anonymous" className="text-sm font-normal">
              Submit anonymously
            </Label>
          </div>

          <div className="flex items-start space-x-2 text-sm text-gray-500">
            <Shield className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <p>
              All submissions are reviewed before publishing. We may edit for clarity or length while preserving your
              message.
            </p>
          </div>

          {formResponse && (
            <Alert variant={formResponse.success ? "default" : "destructive"}>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>{formResponse.success ? "Success" : "Error"}</AlertTitle>
              <AlertDescription>{formResponse.message}</AlertDescription>
            </Alert>
          )}
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" form="story-form" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>Processing...</>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Submit Your Story
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

