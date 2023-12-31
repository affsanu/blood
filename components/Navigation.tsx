"use client";

import { useAuth } from '@clerk/nextjs';
import Link from 'next/link'
import { UserButton } from "@clerk/nextjs";
import { motion } from 'framer-motion';

import { buttonVariants } from './ui/button'
import Image from 'next/image';
import { Logo2 } from '@/public/assets';


const Navigation = () => {
    const { userId } = useAuth();


    return (
        <div className='w-full h-16 border-b flex items-center shadow-sm bg-gradient-to-r from-teal-100 via-blue-100 to-cyan-100'>
            <div className='container mx-auto flex justify-between items-center'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/">
                        <Image src={Logo2} alt='Logo' width={110} />
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1, delay: 0.5 }}
                >
                    {userId ?
                        (
                            <div className='flex items-center gap-4'>
                                <motion.span
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.2, delay: 0.6 }}
                                >
                                    <Link href="/dashboard" className={`${buttonVariants({ variant: "ghost", size: "sm" })} border-rose-100 text-rose-500 hover:border-rose-200 hover:text-rose-600 hover:bg-gradient-to-r hover:from-rose-100`}>
                                        Dashboard
                                    </Link>
                                </motion.span>
                                <motion.span
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.2, delay: 0.7 }}
                                    className='ring rounded-full ring-rose-400'>
                                    <UserButton afterSignOutUrl="/" />
                                </motion.span>
                            </div>

                        )
                        :
                        (<Link href="/sign-in" className={buttonVariants({ variant: "default", size: "sm" })}>
                            Login
                        </Link>
                        )}
                </motion.div>
            </div>
        </div>
    )
}

export default Navigation