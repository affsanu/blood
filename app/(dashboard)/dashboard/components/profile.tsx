'use client';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

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
                console.log(data)
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
        <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed">
            {data && (


                <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                    <span>{data.birth}</span>
                    <h3 className="mt-4 text-lg font-semibold">{data.name}</h3>
                    <p className="mb-4 mt-2 text-sm text-muted-foreground">
                        {data.address}
                    </p>
                    <Dialog>
                        <DialogTrigger>
                            <Button size="sm" className="relative">
                                Add live show
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Add Live Show</DialogTitle>
                                <DialogDescription>
                                    Copy and paste the live feed URL to import.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="url">Live Show URL</Label>
                                    <Input id="url" placeholder="https://example.com/feed.xml" />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button>Import Live Show</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            )}
        </div>
    )
}