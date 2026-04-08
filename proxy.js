// Temporarily disabled Clerk middleware for testing
// import { clerkMiddleware } from "@clerk/nextjs/server";

// const clerkAuth = clerkMiddleware({
//   signInUrl: "/login",
//   signUpUrl: "/register",
// });

// export default function proxy(request) {
//   return clerkAuth(request);
// }

export default function proxy(request) {
  return null; // No authentication for testing
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
