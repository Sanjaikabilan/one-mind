/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'futureskillsprime.in',
            port: '',
            pathname: '/sites/default/files/inline-images/*',
          },
        ],
      },
};

export default nextConfig;
