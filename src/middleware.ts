import { NextResponse, NextRequest } from "next/server";

export function middleware(request:NextRequest){
    //console.log('Middleware');
    // console.log('Request:',request.nextUrl.searchParams.get('id'));
    // if(request.nextUrl.searchParams.get('id')){
    //     return NextResponse.redirect(new URL('/', request.url));
    // }
    return NextResponse.next();
}

export const config = {
    matcher:["/article"]
}