
import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Hidrasyon hatalarını önlemek için
  output: 'standalone' as const,
  // URL'lerin tutarlı olmasını sağlamak için
  trailingSlash: false,
}
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
