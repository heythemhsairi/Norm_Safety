/** Wejden Spire — Design Tokens */

export const colors = {
  primary:   '#2FBF71', // Primary Green
  blue:      '#2F6BFF', // Secondary Blue
  purple:    '#7B61FF', // Accent Purple
  bg:        '#F7F9FC', // Background
  neutral:   '#E8ECF3', // Neutral
  text:      '#1A1D2E', // Text / Dark
  white:     '#FFFFFF',
  // Derived
  primaryLight: '#E8F8F0',
  blueLight:    '#EBF0FF',
  purpleLight:  '#F0ECFF',
  textMuted:    '#6B7280',
  border:       '#E2E8F0',
} as const

export const gradients = {
  greenBlue:  'linear-gradient(135deg, #2FBF71 0%, #2F6BFF 100%)',
  greenPurple: 'linear-gradient(135deg, #2FBF71 0%, #7B61FF 100%)',
  subtle:     'linear-gradient(180deg, #F7F9FC 0%, #FFFFFF 100%)',
} as const

export const typography = {
  fontEn: "'Inter', sans-serif",
  weights: { light: 300, regular: 400, medium: 500, semi: 600, bold: 700, extra: 800 },
  scale: {
    xs:   '0.75rem',   // 12px
    sm:   '0.875rem',  // 14px
    base: '1rem',      // 16px
    lg:   '1.125rem',  // 18px
    xl:   '1.25rem',   // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
    '7xl': '4.5rem',   // 72px
  },
} as const

export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '6rem',
  '5xl': '8rem',
} as const

export const radii = {
  sm:   '0.375rem',
  md:   '0.5rem',
  lg:   '0.75rem',
  xl:   '1rem',
  '2xl': '1.5rem',
  full: '9999px',
} as const

export const shadows = {
  sm:   '0 1px 2px 0 rgba(0,0,0,0.05)',
  md:   '0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -1px rgba(0,0,0,0.04)',
  lg:   '0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -2px rgba(0,0,0,0.03)',
  xl:   '0 20px 25px -5px rgba(0,0,0,0.08), 0 10px 10px -5px rgba(0,0,0,0.02)',
  glow: '0 0 40px rgba(47,191,113,0.15)',
} as const

export const motion = {
  durations: { fast: 0.2, base: 0.4, slow: 0.6, slower: 0.8 },
  easings: {
    ease:    [0.25, 0.1, 0.25, 1.0] as const,
    easeOut: [0.0, 0.0, 0.2, 1.0]  as const,
    spring:  { type: 'spring' as const, stiffness: 100, damping: 20 },
  },
} as const
