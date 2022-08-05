/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: false,
  trailingSlash: false,
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
  sassOptions: { includePaths: [path.join(__dirname, 'styles')] },
}

module.exports = nextConfig
