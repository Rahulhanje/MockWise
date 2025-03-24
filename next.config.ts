import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // A more complete list of Node.js modules to ignore in the browser
      config.resolve.fallback = {
        fs: false,
        http2: false,
        net: false,
        tls: false,
        child_process: false,
        os: false,
        path: false,
        crypto: false,
        stream: false,
        http: false,
        url: false,
        util: false,
        buffer: false,
        zlib: false,
      };
    }
    return config;
  },
};

export default nextConfig;