export const SITE_CONFIG = {
  name: 'EditAI',
  description: 'AI-powered video editing platform',
  url: 'https://editai.app',
  ogImage: 'https://editai.app/og.jpg',
  links: {
    twitter: 'https://twitter.com/editai',
    github: 'https://github.com/editai',
  },
} as const;

export const PRICING_TIERS = {
  FREE: {
    name: 'Free',
    price: 0,
    features: [
      'Basic video editing',
      '480p/720p export',
      '2GB storage',
      'Limited processing minutes',
    ],
  },
  PRO: {
    name: 'Pro',
    price: 29,
    features: [
      'Advanced editing tools',
      'Up to 4K export',
      '50GB storage',
      'Unlimited processing',
      'Priority support',
    ],
  },
  ENTERPRISE: {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Custom storage solutions',
      'API access',
      'Team collaboration',
      'Custom AI model training',
      'White-label option',
      'Priority support',
    ],
  },
} as const;

export const API_ENDPOINTS = {
  AUTH: {
    SIGN_IN: '/api/auth/signin',
    SIGN_UP: '/api/auth/signup',
    SIGN_OUT: '/api/auth/signout',
  },
  VIDEOS: {
    UPLOAD: '/api/videos/upload',
    LIST: '/api/videos',
    GET: (id: string) => `/api/videos/${id}`,
    DELETE: (id: string) => `/api/videos/${id}`,
  },
} as const; 