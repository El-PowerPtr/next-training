import { NextRequest, NextResponse} from "next/server";
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest){
    try {
        const json = await request.json()
        const name_: string = json['name']
        const age_ : number = json['age']
        const phone_: string = json['phone']
        const cell_ : string = json['cell']

        await prisma.nigga.create({data: {
            name: name_,
            age: age_,
            phone: [phone_, cell_]
        }});

        await prisma.$disconnect()

        return NextResponse.json({name: name_,
            age: age_,
            phone: phone_,
            cell: cell_},
            {status: 201});

    } catch (error) {
        await prisma.$disconnect()
        return NextResponse.json({},{status:400})
    } 
    
}