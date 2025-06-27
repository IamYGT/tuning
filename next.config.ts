import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
  // Hidrasyon hatalarını önlemek için
  output: "standalone" as const,
  // URL'lerin tutarlı olmasını sağlamak için
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/:locale/",
        destination: "/:locale",
        permanent: true,
        locale: false, // This is important to avoid next-intl interference
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
