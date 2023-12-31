"use client"

import { motion } from "framer-motion";
import { FacebookIcon, YoutubeIcon, InstagramIcon } from "lucide-react"
import Link from "next/link"
import { buttonVariants } from "./ui/button"

const Footer = () => {
    const date = new Date();
    const thisYear = date.getFullYear();
    return (
        <div className="w-full h-32 bg-gray-50 flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 1.5 }}
                className="flex gap-6 py-6">
                <Link
                    className={buttonVariants({ variant: "outline", size: "icon" })}
                    href="https://facebook.com"
                >
                    <FacebookIcon className="w-5 h-5" />
                </Link>
                <Link
                    className={buttonVariants({ variant: "outline", size: "icon" })}
                    href="https://youtube.com"
                >
                    <YoutubeIcon className="w-5 h-5" />
                </Link>
                <Link
                    className={buttonVariants({ variant: "outline", size: "icon" })}
                    href="https://instragram.com"
                >
                    <InstagramIcon className="w-5 h-5" />
                </Link>
            </motion.div>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 1.6 }}
                className="text-sm font-normal">
                Copyright © {thisYear} {" "}
                <Link href="https://priyosaidpur.com" className="text-rose-500">Priyo Saidpur</Link>
                {" "} by {" "}
                <Link href="https://sanuislam.com" className="text-cyan-500">Sanu Islam</Link>
            </motion.span>
        </div>
    )
}

export default Footer