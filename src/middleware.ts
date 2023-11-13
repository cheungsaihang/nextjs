import { NextResponse, NextRequest } from "next/server";
import { cookies } from 'next/headers'

export function middleware(request:NextRequest){
    //console.log('Middleware');
    // console.log('Request:',request.nextUrl.searchParams.get('id'));
    // if(request.nextUrl.searchParams.get('id')){
    //     return NextResponse.redirect(new URL('/', request.url));
    // }
    const token = cookies().get('token');
    if(!token){
        return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher:["/profile"]
}