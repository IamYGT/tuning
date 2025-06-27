import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

// Custom middleware to handle SEO-friendly routing without redirects
export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // ABSOLUTE PRIORITY: Block ALL trailing slash redirects before anything else
  if (pathname.endsWith("/") && pathname.length > 1) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(0, -1);

    // For locale-only paths, ensure we serve the correct content
    if (pathname.match(/^\/(tr|de|nl|es)\/$/)) {
      // Force rewrite to locale homepage without trailing slash
      return NextResponse.rewrite(url);
    }

    // For all other paths, remove trailing slash
    return NextResponse.rewrite(url);
  }

  // Check if pathname already has a locale prefix
  const hasLocalePrefix = routing.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Use standard next-intl middleware with redirect prevention
  const intlMiddleware = createMiddleware({
    locales: routing.locales,
    defaultLocale: routing.defaultLocale,
    localePrefix: "as-needed", // Default locale at root, others with prefix
    pathnames: routing.pathnames,
    localeDetection: false, // Disable automatic detection to prevent redirects
  });

  const response = intlMiddleware(request);

  // CRITICAL: Convert ANY redirect response to rewrite for SEO (ABSOLUTE PRIORITY)
  if (response && response.status >= 300 && response.status < 400) {
    const location = response.headers.get("location");
    if (location) {
      try {
        const url = new URL(location, request.url);
        // Special handling for trailing slash redirects
        if (url.pathname.endsWith("/") && url.pathname.length > 1) {
          url.pathname = url.pathname.slice(0, -1);
        }
        // Convert ALL redirects to rewrite to avoid SEO issues
        return NextResponse.rewrite(url);
      } catch {
        // If URL parsing fails, continue with original response
      }
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
