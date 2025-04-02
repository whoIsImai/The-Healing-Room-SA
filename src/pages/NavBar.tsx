import {Link } from "react-router-dom"
import { AlertTriangle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NavBar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center">
                <div className="mr-4 hidden md:flex">
                <ul>
                    <li>
                        <Link to="/" className="mr-6 flex items-center space-x-2">
                            <AlertTriangle className="h-6 w-6 text-rose-600" />
                            <span className="font-bold">GBV and Rape Awareness</span>
                        </Link>
                  </li>

                  <nav className="flex items-center space-x-6 text-sm font-medium">

                    <Link to="/about" className="transition-colors hover:text-foreground/80">
                      About
                    </Link>


                    <Link to="/statistics" className="transition-colors hover:text-foreground/80">
                      Statistics
                    </Link>

                    <li>
                        <Link to="/Support" className="transition-colors hover:text-foreground/80">
                        Support
                        </Link>
                    </li>
                  </nav>
                </ul>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-4">
                  <Button variant="outline">
                    <Phone className="mr-2 h-4 w-4" />
                    Helpline
                  </Button>
                  <Button>Donate to keep the website up</Button>
                </div>
              </div>
            </header>
    )
}