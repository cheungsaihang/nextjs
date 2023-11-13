import { type NextRequest, NextResponse } from "next/server"
import { NextApiResponse } from "next"
import jwt from "jsonwebtoken"

const KEY = process.env.JWT_KEY || '';

export async function POST(request: NextRequest, res: NextApiResponse) {
    if(request){
        const body = await request.json();
        const username = body?.username;
        const password = body?.password;

        if(username == 'test' && password == '123456'){
            const userData = {
                userId:1,
                username:'test',
                name:'Test 123',
            }
            const token = jwt.sign(userData,KEY);
            return NextResponse.json({
                success:true,
                ...userData,
                token: token
            });
        }
    }
    return NextResponse.json({
        success: false
    });
}