import { NextResponse } from "next/server"

export async function POST(request){
    let payload = await request.json()
    console.log(payload)
    if(!payload.name || !payload.age || !payload.email){
        return NextResponse.json("result not found",{status:400})
    }
    return NextResponse.json("hello world",{status:200})
}