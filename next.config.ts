import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */  
  compiler: {               // 추가
    styledComponents: true, // 추가
  },
};

export default nextConfig;
