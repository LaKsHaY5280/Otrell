import { RedirectToSignIn } from "@clerk/nextjs";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/organization(.*)",
  "/select-org(.*)",
]);

const isPublicRoute = createRouteMatcher([
  "/",
  "/login",
  "/signup",
  "/forgot-password",
  "/reset-password",
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().protect();
  }

  if (auth().userId && isPublicRoute(req)) {
    let path = "/select-org";

    if (auth().orgId) {
      path = `/organization/${auth().orgId} `;
    }

    const orgSelection = new URL(path, req.url);
    return NextResponse.redirect(orgSelection);
  }

  if (!auth().userId && isProtectedRoute(req)) {
    const orgSelection = new URL("/sign-in", req.url);
    return NextResponse.redirect(orgSelection);
  }

  if (
    !auth().userId &&
    !auth().orgId &&
    req.nextUrl.pathname !== "/select-org"
  ) {
    const orgSelection = new URL("/select-org", req.url);

    return NextResponse.redirect(orgSelection);
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
