import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/portfolio',
  images: {
    unoptimized: true, // нужно, иначе картинки не экспортируются
  },
}

export default nextConfig
