import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, Globe, Headphones, Phone } from "lucide-react"
import NavBar from "../components/ui/NavBar"
import {CitySelect} from "@/lib/city"

export default function Support() {

  return (
    <div className="flex min-h-screen flex-col pl-[1em]">
    <NavBar />
    <div className="container py-10">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Support Resources</h1>
          <p className="text-gray-500 md:text-xl">
            Find help, support, and resources for those affected by gender-based violence and Rape.
          </p>
        </div>

        <div className="bg-rose-50 border border-rose-100 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-rose-600 mt-0.5" />
          <div>
            <h3 className="font-bold text-rose-700">Emergency Help</h3>
            <p className="text-rose-700">
              If you are in immediate danger, please call emergency services at <strong>10111</strong> or your local
              emergency number.
            </p>
          </div>
        </div>

        <Tabs defaultValue="helplines" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="helplines">Helplines</TabsTrigger>
            <TabsTrigger value="safety">Safety Planning</TabsTrigger>
          </TabsList>

          <TabsContent value="helplines" className="mt-6 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-rose-600" />
                    <CardTitle>National Helpline</CardTitle>
                  </div>
                  <CardDescription>24/7 confidential support</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">Phone crime Stop:</span>
                    <span className="font-bold">08600 10111</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">MySAPS USSD Code:</span>
                    <span className="font-bold">*134*10111#</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Chat:</span>
                    <span className="font-bold">MySAPS Mobile App</span>
                  </div>
                  <p className="text-sm text-gray-500 pt-2">
                    Trained advocates available 24/7 to provide crisis intervention, safety planning, and referrals.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Headphones className="h-5 w-5 text-rose-600" />
                    <CardTitle>Specialized Support Lines</CardTitle>
                  </div>
                  <CardDescription>Targeted assistance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="border-b pb-2">
                      <p className="font-medium">Rape Crisis Support Line</p>
                      <p className="font-bold">English - 021 447 9762</p>
                      <p className="font-bold">isiXhosa - 021 361 9085</p>
                      <p className="font-bold">Afrikaans - 021 633 9229</p>
                    </div>
                    <div className="border-b pb-2">
                      <p className="font-medium">GBV(Gender Based violence) Helpline</p>
                      <p className="font-bold">0800 428 428</p>
                    </div>
                    <div>
                      <p className="font-medium">USSD Support for GBV</p>
                      <p className="font-bold">*120*7867#</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Provencial Helplines</CardTitle>
                <CardDescription>Support resources available across South Africa</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-rose-600" />
                    <p>
                      Gender-based violence & Rape support services are available across South Africa. Find helplines specific to your
                      province.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <CitySelect />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="safety" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Safety Planning Resources</CardTitle>
                <CardDescription>Tools and guidance for creating personalized safety plans</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    A safety plan is a personalized, practical plan that can help you avoid dangerous situations and
                    know the best way to react when you're in danger. Safety planning is an ongoing process that changes
                    as your situation changes.
                  </p>

                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-bold mb-2">Personal Safety</h3>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Never feel bad about being “rude” to protect yourself.</li>
                        <li>Have a few go-to people you can reach out to quickly.</li>
                        <li>Have emergency contacts</li>
                        <li>If you feel uneasy about someone, don't let them isolate you</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-bold mb-2">Digital Safety</h3>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Do not respond to threatening or harassing messages.</li>
                        <li>Understand digital stalking</li>
                        <li>Take screenshots as evidence before blocking or reporting.</li>
                        <li>Avoid posting your real-time location on social media.</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-3">
                      <h3 className="font-bold mb-2">Legal Protections</h3>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Understand protection orders</li>
                        <li>Document and keep evidence</li>
                        <li>Working with law enforcement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                <Button className="w-full sm:w-auto">Download Safety Plan Template</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Safety Tips</CardTitle>
                <CardDescription>These tips are about empowerment, not responsibility. The responsibility always lies with the perpetrator—not the survivor.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    Technology can be misused as a tool for abuse, stalking, and harassment. These tips can help you
                    protect your digital privacy and safety.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="h-5 w-5 flex items-center justify-center rounded-full bg-rose-100 text-rose-600 mt-0.5 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <p className="font-medium">Limit Location Sharing</p>
                        <p className="text-sm text-gray-500">
                         You never know who is wathching, Turn off location services when not needed (on apps like Facebook, Whatsapp, Google Maps).
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="h-5 w-5 flex items-center justify-center rounded-full bg-rose-100 text-rose-600 mt-0.5 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <p className="font-medium">Handle Abusive Messages Safely</p>
                        <p className="text-sm text-gray-500">
                        Do not respond to threatening or harassing messages.Do not respond to threatening or harassing messages.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="h-5 w-5 flex items-center justify-center rounded-full bg-rose-100 text-rose-600 mt-0.5 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Carry Personal Safety Tools</p>
                        <p className="text-sm text-gray-500">
                        Whistle, pepper spray, or personal alarm,  some safety apps like Namola or Bull Horns Panic Button can also send instant alerts.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="h-5 w-5 flex items-center justify-center rounded-full bg-rose-100 text-rose-600 mt-0.5 flex-shrink-0">
                        4
                      </div>
                      <div>
                        <p className="font-medium">Report to SAPS</p>
                        <p className="text-sm text-gray-500">
                        You can report rape or abuse at any police station.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-center">Important Note:</p>
                    <p className="text-sm text-gray-500 text-center">
                    🛑 Important: You Are Never to Blame
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full \">
                  Access Detailed Digital Safety Guide
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
    </div>
  )
}

