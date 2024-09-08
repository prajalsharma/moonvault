/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/jobs",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
};

export default nextConfig;
