import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ppc-audit-calculator',
        permanent: true,
      },
    ]
  },
}

export default nextConfig;
