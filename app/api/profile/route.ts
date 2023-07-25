import prisma from "@/prisma";
import { NextResponse } from "next/server"

export async function GET(req: Request,) {
    try {
        const allUsers = await prisma.user.findMany();

        const shuffledUsers = allUsers.sort(() => 0.5 - Math.random());
        const users = shuffledUsers.slice(0, 5);

        return NextResponse.json(users);
    } catch (error) {
        console.log("PROFILE GET", error);
        return new NextResponse("Internel error!", { status: 500 });
    }
}