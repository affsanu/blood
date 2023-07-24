'use client';

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";


interface ProfileData {
    name: string;
    blood: string;
    phone: string;
    district: string;
    address: string;
    birth: string;
}


export function UserProfileCard() {
    const [data, setData] = useState<ProfileData | null>(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('/api/profile/user')
            .then((res) => res.json())
            .then((data: ProfileData) => {
                setData(data)
                setLoading(false)
            })
    }, []);

    if (isLoading) {
        return (
            <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed">
                Loading.....
            </div>
        )
    }

    return (
        <div className="backdrop-blur-sm bg-white/30 border rounded-lg mt-14">
            {data && (
                <div className="p-8 ">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                            <div>
                                <p className="font-bold text-gray-700 text-xl">22</p>
                                <p className="text-gray-400">Friends</p>
                            </div>
                            <div>
                                <p className="font-bold text-gray-700 text-xl">10</p>
                                <p className="text-gray-400">Photos</p>
                            </div>
                            <div>
                                <p className="font-bold text-gray-700 text-xl">89</p>
                                <p className="text-gray-400">Comments</p>
                            </div>    </div>    <div className="relative">
                            <div className="w-48 h-48 bg-gradient-to-tr from-cyan-100 to-purple-200 mx-auto rounded-full  absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-red-500 text-5xl font-bold">
                                {data.blood === "ap" ? "A+"
                                    :
                                    (data.blood === "an" ? "A-"
                                        :
                                        (data.blood === "bp" ? "B+"
                                            :
                                            (data.blood === "bn" ? "B-"
                                                :
                                                (data.blood === "abp" ? "AB+"
                                                    :
                                                    (data.blood === "abn" ? "AB-"
                                                        :
                                                        (data.blood === "op" ? "O+"
                                                            :
                                                            "O-")
                                                    )))))}
                            </div>
                        </div>
                        <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                            <Button variant="default">
                                Edit Profile
                            </Button>
                            <Button variant="destructive">
                                Delete
                            </Button>
                        </div>
                    </div>
                    <div className="mt-20 text-center border-b pb-12">
                        <h1 className="text-4xl font-medium text-gray-700">{data.name},
                            <span className="font-light text-gray-500">
                                {new Date().getFullYear() - new Date(data.birth).getFullYear()}
                            </span>
                        </h1>
                        <p className="font-light text-gray-600 mt-3">{data.address}, {data.district}</p>
                        <p className="mt-8 text-gray-500">Solution Manager - Creative Tim Officer</p>
                        <p className="mt-2 text-gray-500">University of Computer Science</p>
                    </div>
                    <div className="mt-12 flex flex-col justify-center">
                        <p className="text-gray-600 text-center font-light lg:px-16">
                            An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                            performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure.
                            An artist of considerable range.
                        </p>
                        <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
                            Show more
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}