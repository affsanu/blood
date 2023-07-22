"use client";

import { motion } from "framer-motion";
import BenifitTitle from "../BenifitTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
]


const BenifitSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const random_number = Math.floor(Math.random() * 3) + 1;
      setCurrentIndex(random_number);
    }, 5000)

    return () => clearInterval(intervalId);
  }, [])

  return (
    <div className='py-4'>
      <BenifitTitle />
      <div className="container lg:flex items-center mt-4">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 1.3 }}
          className="hidden lg:block w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <Image src={`/assets/images/child/child${currentIndex === 0? currentIndex+1 : currentIndex}.jpg`} alt="child"
              width={500}
              height={500}
              className="overflow-hidden"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 1.4 }}
          className="w-full lg:w-1/2">
          <Card className="lg:max-w-lg backdrop-blur-sm bg-white/10">
            <CardHeader>
              <CardTitle>Blood in your hand</CardTitle>
              <CardDescription>You can easy find all blood group.</CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                {notifications.map((notification, index) => (
                  <div
                    key={index}
                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                  >
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-teal-400" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {notification.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {notification.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default BenifitSection