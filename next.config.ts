import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    styledComponents: true, // ssr 에서 css 적용
  },
}

export default nextConfig
