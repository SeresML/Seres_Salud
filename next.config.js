/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Todo a www: FormSubmit activa por dominio y solo www está activado
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'seressalud.com.ar' }],
        destination: 'https://www.seressalud.com.ar/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
