"use client";

import ProDialog from '@/components/ProDialog'
import AppDownloadSection from '@/components/sections/AppDownloadSection';
import BenifitSection from '@/components/sections/BenifitSection';
import DonorCard from '@/components/sections/DonorCard';
import DonorProfile from '@/components/sections/DonorProfile';
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
      <BenifitSection />
      <AppDownloadSection />
      <DonorProfile />
    </>
  )
}

export default Home