export default function proxy(request) {
  // Utilizing the Next.js 16+ proxy paradigm replacing legacy middleware.js
  // Add authentication or redirect limits here mapping headers.
  return; 
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
