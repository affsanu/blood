import prisma from "@/prisma";
import { NextResponse } from "next/server";
import { auth} from "@clerk/nextjs"

export async function GET(req: Request) {
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 403 });
        }

        const user = await prisma.user.findFirst({
            where: {
                userId: userId,
            }
        });

        return NextResponse.json(user);
    } catch (error) {
        console.log('[USER_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}