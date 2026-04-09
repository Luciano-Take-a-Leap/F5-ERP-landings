import type { NextConfig } from 'next';

const isDev = process.env.NODE_ENV === 'development';

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline'
    https://player.vimeo.com
    https://f.vimeocdn.com
    https://www.googletagmanager.com
    https://www.google-analytics.com
    https://ssl.google-analytics.com
    https://tagmanager.google.com
    https://*.googletagmanager.com
    https://assets.calendly.com;
  style-src 'self' 'unsafe-inline'
    https://fonts.googleapis.com
    https://tagmanager.google.com
    https://assets.calendly.com;
  img-src 'self' blob: data:
    https://cdn.sanity.io
    https://i.vimeocdn.com
    https://www.googletagmanager.com
    https://www.google-analytics.com
    https://ssl.google-analytics.com
    https://*.google-analytics.com
    https://*.googletagmanager.com
    https://assets.calendly.com;
  font-src 'self'
    https://fonts.gstatic.com
    https://fonts.googleapis.com;
  connect-src 'self'
    ${isDev ? 'ws://localhost:3000 ws://localhost ws:' : ''}
    https://studio.takingleap.com
    https://*.sanity.io
    https://*.sanity.network
    https://player.vimeo.com
    https://fresnel.vimeocdn.com
    https://www.google-analytics.com
    https://ssl.google-analytics.com
    https://analytics.google.com
    https://stats.g.doubleclick.net
    https://www.googletagmanager.com
    https://*.google-analytics.com
    https://region1.google-analytics.com
    https://region1.analytics.google.com
    https://calendly.com
    https://*.calendly.com;
  frame-src 'self'
    https://player.vimeo.com
    https://td.doubleclick.net
    https://calendly.com;
  media-src 'self'
    https://vod-progressive.akamaized.net
    https://player.vimeo.com
    blob:;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`;

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  reactStrictMode: true,
  images: {
    //TODO: Quitar dominios no usados
    domains: ['as2.ftcdn.net', 'ferreteriamlo.com.ar', 'cdn.sanity.io'],
  },
};

export default nextConfig;
