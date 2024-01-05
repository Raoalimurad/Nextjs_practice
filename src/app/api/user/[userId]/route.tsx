import { user } from "@/utility/db";
import { NextResponse } from "next/server";

export function GET(request,contentDetail){
    const userData = user.filter((item)=>item.id == contentDetail.params.userId)
    return NextResponse.json(userData.length == 0?{result:"No data found "}:{userData},{status:200})
}