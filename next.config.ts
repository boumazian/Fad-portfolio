import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old French/odd slugs → clean English URLs (keeps shared links working)
  async redirects() {
    return [
      { source: "/formation", destination: "/education", permanent: true },
      { source: "/hobbiesForm", destination: "/hobbies", permanent: true },
    ];
  },
};

export default nextConfig;
