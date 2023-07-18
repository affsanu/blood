"use client";

import ProDialog from '@/components/ProDialog'
import DonorCard from '@/components/sections/DonorCard';
import HeroSection from '@/components/sections/HeroSection';
import { Separator } from '@/components/ui/separator';
import { useEffect, useState } from 'react'

const Home = () => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return null
  }

  return (
    <>
      <ProDialog />
      <HeroSection />
      <DonorCard />
      <Separator />
    </>
  )
}

export default Home