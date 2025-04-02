import {Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { MoveLeft } from "lucide-react"
import NavBar from './NavBar'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] px-4 text-center">
      <NavBar/>
      <div className="space-y-6 max-w-md">
        <h1 className="text-9xl font-extrabold tracking-tight text-primary">404</h1>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Page not found</h2>
          <p className="text-muted-foreground">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
          </p>
        </div>
        <div className="flex justify-center items-center gap-2 pt-4">
          <Button asChild>
            <Link to="/">
              <MoveLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </Button>
        </div>
        <div className="relative h-40 w-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-1 w-1/2 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-primary animate-[move_2s_infinite_linear]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

