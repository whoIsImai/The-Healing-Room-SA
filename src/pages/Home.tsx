import {Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, HelpCircle, Info } from "lucide-react"
import NavBar from '../components/ui/NavBar'

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col pl-[1em]">
    <main className="flex-1">
    <NavBar />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-rose-50">
        
        <div className="container px-4 md:px-6">
            
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Raising Awareness About Gender-Based Violence & Rape
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Education, awareness, and support for survivors and communities affected by Rape & gender-based violence.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button><a href="https://www.education.gov.za/Portals/0/Documents/Publications/STOP%20RAPE%20booklet.pdf" target='_blank'>Learn More</a></Button>
                <Button variant="outline"><Link to="/Support">Find Support</Link></Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md overflow-hidden rounded-xl border bg-background p-2">
                <div className="bg-rose-100 p-8 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <Info className="h-12 w-12 mx-auto text-rose-600" />
                    <h3 className="text-xl font-bold">Educational Content</h3>
                    <p className="text-sm text-gray-500">Understanding the issue is the first step toward change</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-700">
                Key Information
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Understanding Rape & Gender-Based Violence</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Rape and Gender-based violence affects millions. Education and awareness are crucial for prevention.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 lg:gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
                <CardDescription>Understanding the issue</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-100 text-rose-700">
                  <BookOpen className="h-6 w-6" />
                </div>
                <p className="mt-4 text-gray-500">
                  Educational resources to help understand the causes, effects, and prevention of gender-based
                  violence and rape cases.
                </p>
              </CardContent>
              <CardFooter>
              <a href="https://www.education.gov.za/Portals/0/Documents/Publications/STOP%20RAPE%20booklet.pdf" target='_blank'>
                <Button variant="outline" className="w-full">Learn More</Button>
                </a>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Support</CardTitle>
                <CardDescription>Resources for survivors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-100 text-rose-700">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <p className="mt-4 text-gray-500">
                  Support services and resources for survivors of gender-based violence and their communities.
                </p>
              </CardContent>
              <CardFooter>
                
                 <Link to="/Support">
                    <Button variant="outline" className="w-full">Find Support</Button>
                </Link>
                
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </main>
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
          © 2023 GBV Awareness. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link to="/Terms" className="text-sm text-gray-500 underline-offset-4 hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  </div>
    );
}