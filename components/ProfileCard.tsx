"use client"
import { Navigation } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image';


interface BloodCardProps {
    userId: string;
    name: string;
    blood: string;
    id: string;
    phone: string;
    address: string;
    birth: string;
    district: string;
}


const ProfileCard = ({ userId, name, blood, id, phone, address, birth, district }: BloodCardProps) => {
    return (
        <Card className="w-auto mt-4  backdrop:blur-sm bg-white/10 ">
            <CardHeader className='flex justify-center items-center gap-1'>
                <Image
                    src="/assets/images/profile.jpg"
                    alt='blood type A'
                    width={100} height={100}
                    className='rounded-full'
                />
                <CardTitle className='text-lg'>{name}</CardTitle>
                <CardDescription className='uppercase text-xs flex items-center gap-2'>
                    <Navigation className='w-4' />
                    {district}
                    </CardDescription>
            </CardHeader>
            <CardContent className='flex justify-center'>

            </CardContent>
            <CardFooter className='flex justify-between'>
                <span className='text-red-500 font-extrabold'>{blood === "ap" ? "A+" : (blood === "an" ? "A-" : (blood === "bp" ? "B+" : (blood === "bn" ? "B-" : (blood === "abp" ? "AB+" : (blood === "abn" ? "AB-" : (blood === "op" ? "O+" : "O-"))))))}</span>
                <Button variant="default" size="sm">View profile</Button>
            </CardFooter>
        </Card>
    )
}

export default ProfileCard