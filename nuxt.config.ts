// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-swiper',
    '@nuxtjs/color-mode',
    'nuxt-security'
  ],

  // Security configuration
  security: {
    headers: {
      crossOriginEmbedderPolicy: 'require-corp',
      crossOriginOpenerPolicy: 'same-origin',
      crossOriginResourcePolicy: 'same-origin',
      originAgentCluster: '?1',
      referrerPolicy: 'no-referrer-when-downgrade',
      strictTransportSecurity: {
        maxAge: 15552000,
        includeSubdomains: true
      },
      xContentTypeOptions: 'nosniff',
      xDNSPrefetchControl: 'off',
      xDownloadOptions: 'noopen',
      xFrameOptions: 'SAMEORIGIN',
      xPermittedCrossDomainPolicies: 'none',
      xXSSProtection: '1; mode=block'
    },
    rateLimiter: {
      tokensPerInterval: 150,
      interval: 'hour'
    },
    requestSizeLimiter: {
      maxRequestSizeInBytes: 2000000,
      maxUploadFileRequestInBytes: 8000000,
    },
    xssValidator: true,
    corsHandler: {
      origin: '*',
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      preflight: {
        statusCode: 204
      }
    }
  },

  // Color mode configuration
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light'
  },

  // Image configuration
  image: {
    quality: 80,
    format: ['webp']
  },

  // App configuration
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'AngusG Automation',
      meta: [
        { name: 'description', content: 'AI Websites & Automation Solutions by AngusG' },
        { name: 'theme-color', content: '#ffffff' }
      ]
    }
  }
})
