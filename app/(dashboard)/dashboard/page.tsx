import { Metadata } from "next"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { AlbumArtwork } from "./components/album-artwork"
import { PodcastEmptyPlaceholder } from "./components/podcast-empty-placeholder"
import { madeForYouAlbums } from "./data/albums"
import HomeCard from "./components/home-card"
import { UserProfileCard } from "./components/profile"


export const metadata: Metadata = {
  title: "Priyo Blood Dashboard",
  description: "User Dashboard of Priyo Blood.",
}

interface HomeCardProps {
  title: string;
  content: string;
  desc: string;
  logo: React.ReactElement<SVGElement>;
}

const cardData = [
  {
    label: "Total Revenue",
    logo: <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="h-4 w-4 text-muted-foreground"
    >
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>,
    content: "$45,231.89",
    desc: "+20.1% from last month"
  },
  {
    label: "Subscriptions",
    logo: <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="h-4 w-4 text-muted-foreground"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>,
    content: "+2350",
    desc: "+180.1% from last month"
  },
  {
    label: "Sales",
    logo: <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="h-4 w-4 text-muted-foreground"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <path d="M2 10h20" />
    </svg>,
    content: "+12,234",
    desc: "+19% from last month"
  },
  {
    label: "Active Now",
    logo: <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="h-4 w-4 text-muted-foreground"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>,
    content: "+573",
    desc: "+201 since last hour"
  },
];



export default function Dashboard() {
  return (
    <div className=" bg-gradient-to-r from-cyan-100 via-slate-50 to-teal-100">
      <div className="container h-full px-4 py-6 lg:px-8">
        <Tabs defaultValue="home" className="h-full space-y-6">
          <div className="space-between flex items-center">
            <TabsList>
              <TabsTrigger value="home" className="relative">
                Home
              </TabsTrigger>
              <TabsTrigger value="profile">
                Profile
              </TabsTrigger>
              <TabsTrigger value="records">
                Records
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent
            value="home"
            className="border-none p-0 outline-none"
          >
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {cardData.map((data, index) => (
                <HomeCard
                  key={index}
                  label={data.label}
                  logo={data.logo}
                  content={data.content}
                  desc={data.desc}
                />
              ))}
            </div>

            <div className="mt-6 space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                Made for You
              </h2>
              <p className="text-sm text-muted-foreground">
                Your personal playlists. Updated daily.
              </p>
            </div>
            <Separator className="my-4" />
            <div className="relative">
              <ScrollArea>
                <div className="flex space-x-4 pb-4">
                  {madeForYouAlbums.map((album) => (
                    <AlbumArtwork
                      key={album.name}
                      album={album}
                      className="w-[150px]"
                      aspectRatio="square"
                      width={150}
                      height={150}
                    />
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent
            value="profile"
            className="h-full flex-col border-none p-0 data-[state=active]:flex"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">
                  New Episodes
                </h2>
                <p className="text-sm text-muted-foreground">
                  Your favorite profile. Updated daily.
                </p>
              </div>
            </div>
            <Separator className="my-4" />
            <UserProfileCard />
          </TabsContent>
          <TabsContent
            value="records"
            className="h-full flex-col border-none p-0 data-[state=active]:flex"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">
                  New Episodes
                </h2>
                <p className="text-sm text-muted-foreground">
                  Your favorite records. Updated daily.
                </p>
              </div>
            </div>
            <Separator className="my-4" />
            <PodcastEmptyPlaceholder />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}