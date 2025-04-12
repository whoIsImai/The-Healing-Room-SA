import {Link } from "react-router-dom"
import {app} from "../utils/firebase"
import { getAuth } from "firebase/auth"
import DefaultAvatar from '../../public/Profile-PNG-Photo.png'
import { ScrollText, FileText, MoveUpRight, LogOut } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState } from "react"
import LoadingOverlay from "@/utils/loading"


interface MenuItem {
    label: string
    value?: string
    href: string
    icon?: React.ReactNode
    external?: boolean
    }

interface Profileprops {
    name: string | null | undefined
    edit: string
    picture: string
    }

    const auth = getAuth(app)
    const user = auth.currentUser || null
    
    const defaultProfile = {
        name: user?.displayName,
        edit: "Edit your profile",
        picture: user?.photoURL || DefaultAvatar,
        } satisfies Required<Profileprops>


        
export default function Profile({
    name = defaultProfile.name,
    edit = defaultProfile.edit,
    picture = defaultProfile.picture,
}: Partial<Profileprops> = defaultProfile){

    const [loading, setLoading] = useState(false)

    const menuItems: MenuItem[] = [
        {
          label: "Your Stories",
          href: "/your-stories",
          icon: <ScrollText className="w-4 h-4" />,
        },
        {
          label: "Terms & Policies",
          href: "/Terms",
          icon: <FileText className="w-4 h-4" />,
          external: true,
        }
      ]

       const logout = async () => {
           try {
               setLoading(true)
               await auth.signOut()
              console.log("User signed out")
           } catch (error) {
             console.error(error)
              console.error("Error signing out:", error)
           } finally{
               setLoading(false)
           }
       }
      
  return (
     <>
           {loading && <LoadingOverlay />}
    <div className="w-full max-w-sm mx-auto">
      <div className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <div className="relative px-6 pt-12 pb-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="relative shrink-0">
              <img
                src={picture}
                alt='Your Profile'
                width={72}
                height={72}
                className="rounded-full ring-4 ring-white dark:ring-zinc-900 object-cover"
              />
              <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-900" />
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{name}</h2>
              <p className="text-zinc-600 dark:text-zinc-400">{edit}</p>
            </div>
          </div>
          <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-6" />
          <div className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center justify-between p-2 
                                    hover:bg-zinc-50 dark:hover:bg-zinc-800/50 
                                    rounded-lg transition-colors duration-200"
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{item.label}</span>
                </div>
                <div className="flex items-center">
                  {item.value && <span className="text-sm text-zinc-500 dark:text-zinc-400 mr-2">{item.value}</span>}
                  {item.external && <MoveUpRight className="w-4 h-4" />}
                </div>
              </Link>
            ))}

            <button
              type="button"
              className="w-full flex items-center justify-between p-2 
                                hover:bg-zinc-50 dark:hover:bg-zinc-800/50 
                                rounded-lg transition-colors duration-200"
            >
              <div className="flex items-center gap-2">
                <LogOut className="w-4 h-4" />
                <Button className="text-sm font-medium text-zinc-900 dark:text-zinc-100"
                onClick={logout}
                >Logout</Button>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
    )}