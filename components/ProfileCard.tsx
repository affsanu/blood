"use client";
import CountUp from 'react-countup';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge';
import Image from 'next/image';

interface BloodCardProps {
    group: string;
    type: string;
    user: number;
    desc: string;
}


const ProfileCard = ({ group, type, user, desc }: BloodCardProps) => {
    return (
        <Card className="w-auto mt-4 cursor-pointer backdrop-blur-sm bg-white/30 hover:scale-105 duration-300">
            <CardHeader className='flex justify-center items-center gap-1'>
                <Image src="/assets/icons/bloodTypeA.svg" alt='blood type A' width={24} height={24} />
            </CardHeader>
        </Card>
    )
}

export default ProfileCard