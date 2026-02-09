/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['chokidar', 'ws'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Server-side webpack config for file system operations
      config.externals = [...config.externals, 'chokidar'];
    } else {
      // Client-side webpack config
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
        crypto: false,
      };
    }
    return config;
  },
  // Enable standalone output for Vercel deployment
  output: 'standalone',
  // Disable telemetry for production
  env: {
    NEXT_TELEMETRY_DISABLED: '1',
  },
  // Configure rewrites for API routes
  async rewrites() {
    return [
      {
        source: '/api/files/:path*',
        destination: '/api/files/handler',
      },
      {
        source: '/api/agent/:path*', 
        destination: '/api/agent/handler',
      }
    ];
  },
  // Headers for CORS and security
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: process.env.NODE_ENV === 'development' ? '*' : process.env.VERCEL_URL || 'localhost:3000',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;