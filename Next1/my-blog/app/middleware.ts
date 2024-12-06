import { NextResponse, NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/old-blog') {
    return NextResponse.redirect(new URL('/blog', req.url));
  }
}
