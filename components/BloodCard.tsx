"use client";
import CountUp from 'react-countup';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge';

interface BloodCardProps {
    group: string;
    type: string;
    user: number;
    desc: string;
}


const BloodCard = ({ group, type, user, desc }: BloodCardProps) => {
    return (
        <Card className="w-auto mt-4 cursor-pointer backdrop-blur-sm bg-white/30 hover:scale-105 duration-300">
            <CardHeader className='flex justify-center items-center gap-1'>
                <CardTitle className="text-sm"><span className="">({group})</span> {type}</CardTitle>
                <CardDescription className='text-rose-400 font-bold'>
                    <Badge variant="outline" className='w-16 flex items-center justify-center'>
                        <CountUp end={user} duration={10} />
                    </Badge>
                </CardDescription>
            </CardHeader>
        </Card>
    )
}

export default BloodCard