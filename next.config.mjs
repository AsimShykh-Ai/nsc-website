/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // builds plain HTML files that any free host can serve
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
};
export default nextConfig;
