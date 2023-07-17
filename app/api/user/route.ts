import prisma from "@/prisma";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, phone, address, nid, blood } = body;
        const { userId } = auth();

        if (!userId) {
            return new NextResponse("Unauthorize!", { status: 401 });
        }

        if (!name || !phone || !address || !nid || !blood) {
            return new NextResponse("All field are required!", { status: 400 });
        }

        const profile = await prisma.user.create({
            data: {
                name, phone, blood: blood, address, nid, avatar: userId, userId
            }
        });

        return NextResponse.json(profile);
    } catch (error) {
        console.log("PROFILE POST", error);
        return new NextResponse("Internel error!", { status: 500 });
    }
}

export async function GET(req: Request,) {
    try {

        const { userId } = auth();

        if (!userId) {
            return new NextResponse("Unauthorize!", { status: 401 });
        }

        const isProfile = await prisma.user.findFirst({
            where: {
                userId
            }
        });

        if (!isProfile) {
            return NextResponse.json(true);
        }

        return NextResponse.json(false);
    } catch (error) {
        console.log("PROFILE GET", error);
        return new NextResponse("Internel error!", { status: 500 });
    }
}