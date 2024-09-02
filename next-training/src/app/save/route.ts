import { NextRequest } from "next/server";

export async function POST(request: NextRequest){
    const json = await request.json()
    const name: string = json['name']
    const age : number = json['age']
    const phone: string = json['phone']
    const cell : string = json['cell']

    
}