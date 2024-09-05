import { NextResponse, type NextRequest } from 'next/server'

// REdirecting using conditional statement
export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === "/profile") {
        return NextResponse.redirect(new URL("/hello", request.url))
    }
}



// // Using matcher config, redirecting '/profile' --> '/'
// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL("/", request.url))
// }

// export const config = {
//     matcher: "/profiles",
// }