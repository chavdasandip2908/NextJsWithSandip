import { NextResponse } from "next/server";


export default function middleware(request) {
    // 1. all page Middleware
    // if (request.nextUrl.pathname !== '/login') {
    //     return NextResponse.redirect(new URL("/login", request.url));
    // }

    // 2. specific page middleware
    return NextResponse.redirect(new URL("/login", request.url));
}
// 2. specific page middleware
// In This object, it is defined on which page to apply middleware
export const config = {
    matcher: ["/about/:path*", "/studentlist/:path*"]
}
