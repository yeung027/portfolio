/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const i18n = {
  locales: ['en_US', 'zh-hk'],
  defaultLocale: 'en_US',
}

nextConfig.i18n = i18n;

module.exports = nextConfig
