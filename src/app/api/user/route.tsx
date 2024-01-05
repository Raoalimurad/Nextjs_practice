import { user } from "@/utility/db";
import { NextResponse } from "next/server";

export function GET(request,contentDetail){
    const userData = user.filter((item)=>item)
    return NextResponse.json(userData,{status:200})
}