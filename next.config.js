/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        defaultLocale: "en",
        locales: ["en", "id"],
        localeDetection: true,
    },
}

module.exports = nextConfig
