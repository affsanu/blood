"use client";

import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { BsAndroid2 } from "react-icons/bs";

const AppDownloadSection = () => {
  return (
    <div className="w-full h-24 backdrop-blur-sm bg-white/75">
      <div className="container h-full flex items-center gap-6">

        <span className="text-lg lg:text-xl font-bold text-rose-500">
          Download Android App Now !
        </span>
        <Link href="/" target="__blank" className={buttonVariants({ variant: "default", size: "sm" })}>
          <BsAndroid2 className="mr-2 h-6 w-6" />
          <div className="flex flex-col py-2">
            <span className="uppercase text-xs text-gray-300">Download</span>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default AppDownloadSection