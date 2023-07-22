import prisma from "@/prisma";
import { NextResponse } from "next/server"

export async function GET(req: Request,) {
    try {
        const users = await prisma.user.findMany();

        return NextResponse.json(users);
    } catch (error) {
        console.log("PROFILE GET", error);
        return new NextResponse("Internel error!", { status: 500 });
    }
}