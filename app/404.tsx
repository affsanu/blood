"use client";
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const NotFound = () => {
    return (
        <div className="w-full h-[88vh] flex justify-center items-center">
            <Card>
                <CardHeader>
                    <CardTitle>Oops!</CardTitle>
                    <CardDescription>404 Not Found.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    The page you’re looking for is not available right now. Please try again later.
                </CardContent>
                <CardFooter>
                    <Link href="http://localhost:3000" className={`${buttonVariants({ variant: "default", size: "sm" })} w-full`}>
                        <HomeIcon className="mr-2 h-4 w-4" /> Back Home
                    </Link>
                </CardFooter>
            </Card>

        </div>
    )
}

export default NotFound