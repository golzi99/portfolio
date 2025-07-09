const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  /* config options here */
  output: 'export',
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio/' : '',
  images: {
    unoptimized: true, // нужно, иначе картинки не экспортируются
  },
}

export default nextConfig
