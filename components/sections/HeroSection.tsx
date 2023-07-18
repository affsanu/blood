"use client";

import { useAuth } from '@clerk/nextjs';
import Image from 'next/image';

import { Button, buttonVariants } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
    const { sessionId } = useAuth();
    return (
        <header className='container px-6 py-16 mx-auto'>
            <div className='items-center lg:flex'>

                <div className='w-full lg:w-1/2'>
                    <div className='lg:max-w-lg'>
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.8 }}
                            className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                            Share Life, Donate Blood: <br /> Be a Lifesaver <span className="text-rose-500 ">Today!</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.9 }}
                            className="mt-3 text-gray-600 dark:text-gray-400">
                            Join our blood donation community and save lives. Your small act can make a big impact. Donate blood today!
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.9 }}
                        >
                            {sessionId ? (
                                <Link href="/search" className={`${buttonVariants({ variant: "destructive", size: "sm" })} uppercase mt-6`}>
                                    Find a blood donor
                                </Link>
                            ) : (
                                <Link href="/sign-in" className={`${buttonVariants({ variant: "default", size: "sm" })} uppercase mt-6`}>
                                    Register as donor
                                </Link>
                            )}
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.9 }}
                    className='flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2'>
                    <Image src="/assets/images/banner.png" alt='banner' width={600} height={600} />
                </motion.div>
            </div>
        </header>
    )
}

export default HeroSection