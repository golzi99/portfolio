const nextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  images: {
    unoptimized: true, // нужно, иначе картинки не экспортируются
  },
}

export default nextConfig
