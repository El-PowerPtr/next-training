'use server';
import { PrismaClient } from "@prisma/client";
import { randomInt } from "crypto";
import Nigga from '../classes/nigga'

const prisma = new PrismaClient()

export default async function getRandomNigga(): Promise<Nigga|null> {
    try{
        const count: number = await prisma.nigga.count()    
        const index: number = randomInt(count)
        const result = await prisma.nigga.findFirst({
            where:{ 
                id: index
            }
        })
        prisma.$disconnect()

        if (result)
            return {
                "name": result.name, 
                "age": result.age, 
                "phone": result.phone[0],
                "cell": result.phone[1]
            }
        else 
            return null

    }catch(error){
        console.error(error)
        return null
    }
    
}
