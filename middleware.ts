import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

// Custom middleware to handle SEO-friendly routing
export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if pathname already has a locale prefix
  const hasLocalePrefix = routing.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If pathname has no locale prefix and is the root path, serve default locale content
  if (!hasLocalePrefix && pathname === "/") {
    // Rewrite to default locale content without redirecting
    const url = request.nextUrl.clone();
    url.pathname = "/en";
    return NextResponse.rewrite(url);
  }

  // For other paths, use the standard next-intl middleware
  const intlMiddleware = createMiddleware({
    locales: routing.locales,
    defaultLocale: routing.defaultLocale,
    localePrefix: routing.localePrefix,
    pathnames: routing.pathnames,
    localeDetection: false,
  });

  const response = intlMiddleware(request);

  // If the response is a redirect to add locale prefix, convert it to a rewrite
  if (response && response.status >= 300 && response.status < 400) {
    const location = response.headers.get("location");
    if (location) {
      const url = new URL(location, request.url);
      // Convert redirect to rewrite to avoid SEO issues
      return NextResponse.rewrite(url);
    }
  }

  return response;
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
