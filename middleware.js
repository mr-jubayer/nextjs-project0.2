import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.rewrite(new URL("/dashboard/users", request.url));
  }
  return NextResponse.next();
  return NextResponse.redirect(new URL("/", request.url));
}

// export const config = {
//   matcher: ["/dashboard/:path*"],
// };
// request.nextUrl.pathname.startsWith('/about')
