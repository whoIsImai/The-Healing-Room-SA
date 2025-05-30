import {Link } from "react-router-dom"
import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect} from "react"
import {FcGoogle} from 'react-icons/fc'
import {app} from "../../utils/firebase"
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, User } from "firebase/auth"
import LoadingOverlay from "@/utils/loading"

const provider = new GoogleAuthProvider();
const auth = getAuth(app)

export default function NavBar() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Set up persistent auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    return () => unsubscribe()
  }, [])

  async function HandleLogin() {
    try {
      setLoading(true)
      await signInWithPopup(auth, provider);
      // `onAuthStateChanged` will automatically update `user`
    } catch (error) {
      console.error("Login error:", error)
    } finally {
      setLoading(false)
    }
  }


  if(!user) {
    return (
      <>
          {loading && <LoadingOverlay />}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-auto items-center">
                <div className="mr-4 flex md:flex">
                
                  <nav className="flex items-center text-sm ">
                        <Link to="/" className="mr-6 flex items-center space-x-2">
                            <AlertTriangle className="h-6 w-6 text-rose-600" />
                            <span className="font-bold whitespace-nowrap text-lg">GBV and Rape Awareness</span>
                        </Link>
                  </nav>
              
                </div>
                  <div className="w-full">
      {/* Toggle Button - visible only on mobile */}
      <div className="flex justify-end md:hidden p-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>

      {/* Mobile Menu (shows only when open) */}
      {menuOpen && (
        <div className="flex flex-col items-center space-y-4 p-4 md:hidden">
                    <Link to="/Support" className="transition-colors hover:text-foreground/80">
                        Support
                    </Link>
                    <Link to="/Stories" className="transition-colors hover:text-foreground/80">
                        Stories
                        </Link>
                 <Button className="w-auto p-4 rounded flex items-center gap-2" onClick={HandleLogin}>
                    <FcGoogle size={20} />
                    Sign In With Google
                  </Button>
        </div>
      )}

      {/* Desktop Menu (always visible) */}
      <div className="hidden md:flex  md:flex-row md:items-center md:justify-end space-y-4 md:space-y-0 md:space-x-4 p-4">                    
                        <Link to="/Support" className="transition-colors hover:text-foreground/80">
                        Support
                        </Link>
                        <Link to="/Stories" className="transition-colors hover:text-foreground/80">
                        Stories
                        </Link>
        <Button className="w-auto p-2 rounded flex items-center gap-2" onClick={HandleLogin}>
          <FcGoogle size={20} />
            Sign In With Google
          </Button>
      </div>
    </div>

               </div>
            </header>
            </>
    )
}else{
  return (
    <>
       {loading && <LoadingOverlay />}
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-auto items-center">
      <div className="mr-4 flex md:flex">
      
        <nav className="flex items-center text-sm ">
              <Link to="/" className="mr-6 flex items-center space-x-2">
                  <AlertTriangle className="h-6 w-6 text-rose-600" />
                  <span className="font-bold whitespace-nowrap text-lg">GBV and Rape Awareness</span>
              </Link>
        </nav>
    
      </div>
        <div className="w-full">
{/* Toggle Button - visible only on mobile */}
<div className="flex justify-end md:hidden p-4">
<Button
variant="outline"
size="icon"
onClick={() => setMenuOpen(!menuOpen)}
>
{/* Hamburger Icon */}
<svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-6 w-6"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <line x1="4" x2="20" y1="6" y2="6" />
  <line x1="4" x2="20" y1="12" y2="12" />
  <line x1="4" x2="20" y1="18" y2="18" />
</svg>
</Button>
</div>

{/* Mobile Menu (shows only when open) */}
{menuOpen && (
<div className="flex flex-col items-center space-y-4 p-4 md:hidden">
          <Link to="/Support" className="transition-colors hover:text-foreground/80">
              Support
          </Link>
          <Link to="/Stories" className="transition-colors hover:text-foreground/80">
              Stories
              </Link>
              <Link to="/Profile" className="transition-colors hover:text-foreground/80">
              Profile
              </Link>
</div>
)}

{/* Desktop Menu (always visible) */}
<div className="hidden md:flex  md:flex-row md:items-center md:justify-end space-y-4 md:space-y-0 md:space-x-4 p-4">                    
              <Link to="/Support" className="transition-colors hover:text-foreground/80">
              Support
              </Link>
              <Link to="/Stories" className="transition-colors hover:text-foreground/80">
              Stories
              </Link>
             <Link to="/Profile" className="transition-colors hover:text-foreground/80">
              Profile
              </Link>
</div>
</div>

     </div>
  </header>
  </>
  )
}
}