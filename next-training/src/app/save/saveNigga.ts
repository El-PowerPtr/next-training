'use server';
import { PrismaClient } from "@prisma/client";
import Nigga from "../classes/nigga";

const cache = 'force-no-cache'
const dynamic = 'force-dynamic'
const prisma = new PrismaClient()

export default async function name({ name, age, phone, cell }: Nigga): Promise<boolean> {
        try {
            await prisma.nigga.create({data: {
                name: name,
                age: age,
                phone: [phone, cell]
            }});
            
            await prisma.$disconnect()
            return true
        } catch (error) {

            await prisma.$disconnect()
            console.error(error)
            return false
        }
}