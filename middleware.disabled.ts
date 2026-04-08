import { NextResponse } from 'next/server';

// Minimal middleware to satisfy Next.js runtime during local development.
// This intentionally does not enforce authentication; use proxy.js or middleware logic
// for production behavior.
export function middleware(request: Request) {
  return NextResponse.next();
}

export const config = {
  matcher: ['/(dashboard|api|auth)(/:path*)?'],
};
