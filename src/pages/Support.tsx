import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertCircle, Building, Globe, Headphones, MapPin, Phone, Shield } from "lucide-react"
import NavBar from "./NavBar"

export default function Support() {
  return (
    <div className="flex min-h-screen flex-col">
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
              If you are in immediate danger, please call emergency services at <strong>911</strong> or your local
              emergency number.
            </p>
          </div>
        </div>

        <Tabs defaultValue="helplines" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="helplines">Helplines</TabsTrigger>
            <TabsTrigger value="local">Local Resources</TabsTrigger>
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
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">Phone:</span>
                    <span className="font-bold">1-800-XXX-XXXX</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">Text:</span>
                    <span className="font-bold">SUPPORT to 88888</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Chat:</span>
                    <span className="font-bold">Available online</span>
                  </div>
                  <p className="text-sm text-gray-500 pt-2">
                    Trained advocates available 24/7 to provide crisis intervention, safety planning, and referrals.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Call Now</Button>
                </CardFooter>
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
                      <p className="font-medium">LGBTQ+ Support Line</p>
                      <p className="font-bold">1-800-XXX-XXXX</p>
                    </div>
                    <div className="border-b pb-2">
                      <p className="font-medium">Teen Dating Violence Helpline</p>
                      <p className="font-bold">1-800-XXX-XXXX</p>
                    </div>
                    <div>
                      <p className="font-medium">Immigrant & Multilingual Support</p>
                      <p className="font-bold">1-800-XXX-XXXX</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Support Lines
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>International Helplines</CardTitle>
                <CardDescription>Support resources available globally</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-rose-600" />
                    <p>
                      Gender-based violence support services are available worldwide. Find helplines specific to your
                      country or region.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="region">Select Region</Label>
                      <Select>
                        <SelectTrigger id="region" className="mt-1">
                          <SelectValue placeholder="Choose region" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="north-america">North America</SelectItem>
                          <SelectItem value="europe">Europe</SelectItem>
                          <SelectItem value="asia">Asia</SelectItem>
                          <SelectItem value="africa">Africa</SelectItem>
                          <SelectItem value="south-america">South America</SelectItem>
                          <SelectItem value="oceania">Oceania</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="country">Select Country</Label>
                      <Select disabled>
                        <SelectTrigger id="country" className="mt-1">
                          <SelectValue placeholder="Choose country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="placeholder">Select region first</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Find International Resources
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="local" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Find Local Support Services</CardTitle>
                <CardDescription>Shelters, counseling, legal aid, and more in your area</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-rose-600" />
                    <p>Enter your location to find nearby support services for survivors of gender-based violence.</p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="zip">Zip/Postal Code</Label>
                      <Input id="zip" placeholder="Enter zip code" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="service-type">Service Type</Label>
                      <Select>
                        <SelectTrigger id="service-type" className="mt-1">
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Services</SelectItem>
                          <SelectItem value="shelter">Emergency Shelter</SelectItem>
                          <SelectItem value="counseling">Counseling</SelectItem>
                          <SelectItem value="legal">Legal Assistance</SelectItem>
                          <SelectItem value="medical">Medical Care</SelectItem>
                          <SelectItem value="support-groups">Support Groups</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="confidential" />
                    <Label htmlFor="confidential" className="text-sm">
                      Show only confidential address locations
                    </Label>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Search</Button>
              </CardFooter>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-rose-600" />
                    <CardTitle>Types of Support Services</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 flex items-center justify-center rounded-full bg-rose-100 text-rose-600 mt-0.5 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <p className="font-medium">Emergency Shelters</p>
                        <p className="text-sm text-gray-500">
                          Safe, temporary housing for individuals and families fleeing violence
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 flex items-center justify-center rounded-full bg-rose-100 text-rose-600 mt-0.5 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <p className="font-medium">Crisis Counseling</p>
                        <p className="text-sm text-gray-500">Immediate emotional support and safety planning</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 flex items-center justify-center rounded-full bg-rose-100 text-rose-600 mt-0.5 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Legal Advocacy</p>
                        <p className="text-sm text-gray-500">
                          Help with protective orders, court accompaniment, and legal referrals
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 flex items-center justify-center rounded-full bg-rose-100 text-rose-600 mt-0.5 flex-shrink-0">
                        4
                      </div>
                      <div>
                        <p className="font-medium">Support Groups</p>
                        <p className="text-sm text-gray-500">Peer support and healing in a group setting</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-rose-600" />
                    <CardTitle>Confidentiality & Privacy</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Most support services for survivors of gender-based violence offer confidential services to protect
                    your privacy and safety.
                  </p>
                  <div className="space-y-2">
                    <p className="font-medium">What this means:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Your information will be kept private</li>
                      <li>Many shelters have undisclosed locations</li>
                      <li>Services are available regardless of reporting to law enforcement</li>
                      <li>Advocates can explain any mandatory reporting requirements</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
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
                        <li>Identifying safe areas in your home</li>
                        <li>Planning escape routes</li>
                        <li>Emergency contacts and code words</li>
                        <li>Essential items to keep ready</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-bold mb-2">Digital Safety</h3>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Securing your devices and accounts</li>
                        <li>Understanding digital stalking</li>
                        <li>Safe communication methods</li>
                        <li>Privacy settings and location services</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-bold mb-2">Legal Protections</h3>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Understanding protective orders</li>
                        <li>Documentation and evidence</li>
                        <li>Working with law enforcement</li>
                        <li>Child custody considerations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                <Button className="w-full sm:w-auto">Download Safety Plan Template</Button>
                <Button variant="outline" className="w-full sm:w-auto">
                  Connect with an Advocate
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Online Safety Tips</CardTitle>
                <CardDescription>Protecting your digital privacy and security</CardDescription>
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
                        <p className="font-medium">Use a secure browser</p>
                        <p className="text-sm text-gray-500">
                          Consider using private browsing mode or browsers focused on privacy
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="h-5 w-5 flex items-center justify-center rounded-full bg-rose-100 text-rose-600 mt-0.5 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <p className="font-medium">Check your device settings</p>
                        <p className="text-sm text-gray-500">
                          Review which apps have access to your location, camera, and microphone
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="h-5 w-5 flex items-center justify-center rounded-full bg-rose-100 text-rose-600 mt-0.5 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Use strong, unique passwords</p>
                        <p className="text-sm text-gray-500">
                          Change passwords for important accounts, especially if they might be compromised
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="h-5 w-5 flex items-center justify-center rounded-full bg-rose-100 text-rose-600 mt-0.5 flex-shrink-0">
                        4
                      </div>
                      <div>
                        <p className="font-medium">Be cautious with social media</p>
                        <p className="text-sm text-gray-500">
                          Review privacy settings and be mindful of what you share publicly
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm font-medium">Important Note:</p>
                    <p className="text-sm text-gray-500">
                      If you believe your devices are being monitored, be aware that changing settings or passwords
                      could alert the person monitoring you. Consider using a safer device (like a library computer) to
                      research resources or seek help.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
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

