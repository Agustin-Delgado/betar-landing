/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    serverComponentsExternalPackages: ["yjs"],
    esmExternals: "loose"
  },
};

export default nextConfig;
