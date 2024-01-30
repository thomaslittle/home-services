/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cloudfront.net",
        port: "",
        pathname: "/logos/**",
      },
    ],
  },
};

export default nextConfig;
