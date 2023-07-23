import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import { Playlist } from "../data/playlists"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Playlist[]
}

export function Sidebar({ className, playlists }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4  h-screen flex flex-col justify-between">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight hidden md:block">
            Dashboard
          </h2>
          <div className="space-y-1">
            <Button variant="default" className="md:w-full items-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="md:mr-2 h-4 w-4"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg>
              <span className="hidden md:block">Home</span>
            </Button>
            <Button variant="ghost" className="md:w-full items-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="md:mr-2 h-4 w-4"
              >
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
              <span className="hidden md:block">Profile</span>
            </Button>
            <Button variant="ghost" className="md:w-full items-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="md:mr-2 h-4 w-4"
              >
                <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
                <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
                <circle cx="12" cy="12" r="2" />
                <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
                <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
              </svg>
              <span className="hidden md:block">Timeline</span>
            </Button>
          </div>
        </div>

        <div className="py-2 hidden md:block">
          <Card className="backdrop-blur-sm bg-white/30 mx-2">
            <CardHeader>
              <CardTitle>Donate Now</CardTitle>
              <CardDescription>For humanity for life.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-normal text-justify">
                At the heart of our foundation lies the belief that every drop of blood given is a gift of life.
                With your financial contribution, we can build a stronger infrastructure to organize and conduct blood donation drives across the country.
                Your support will enable us to reach more donors, educate communities on the importance of donation,
                and provide critical medical assistance to those battling life-threatening conditions.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Donate</Button>
            </CardFooter>
          </Card>
        </div>

      </div>
    </div>
  )
}