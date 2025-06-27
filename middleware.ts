import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

// Custom middleware to handle SEO-friendly routing without redirects
export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // CRITICAL: Handle trailing slash for locale-only paths to prevent redirects
  // /tr/ -> /tr, /de/ -> /de, etc. (rewrite, not redirect)
  if (pathname.match(/^\/(tr|de|nl|es)\/$/)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(0, -1); // Remove trailing slash
    return NextResponse.rewrite(url);
  }

  // Handle general trailing slash normalization for other paths
  if (
    pathname.endsWith("/") &&
    pathname.length > 1 &&
    !pathname.match(/^\/(tr|de|nl|es)\/$/)
  ) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(0, -1);
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

  // CRITICAL: Convert ANY redirect response to rewrite for SEO
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
