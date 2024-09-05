import { NextRequest, NextResponse} from "next/server";
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest){
    try {
        const json = await request.json()
        const name: string = json['name']
        const age : number = json['age']
        const phone: string = json['phone']
        const cell : string = json['cell']

        await prisma.nigga.create({data: {
            name: name,
            age: age,
            phone: [phone, cell]
        }});

        await prisma.$disconnect()

        return NextResponse.json({name: name,
            age: age,
            phone: phone,
            cell: cell},
            {status: 201});

    } catch (error) {
        await prisma.$disconnect()
        return NextResponse.json({},{status:400})
    } 
    
}