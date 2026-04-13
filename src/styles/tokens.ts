/** NormSafety — Design Tokens
 *  Enterprise AI SaaS — Workplace Safety & Prevention Intelligence
 *  Tagline: Prévenir. Piloter. Performer.
 */

export const colors = {
  // Primary
  midnight:     '#0B1535', // Core Midnight — trust, governance, executive authority
  midnight2:    '#142043', // Midnight elevated surface
  teal:         '#14B8A6', // Signal Teal — AI intelligence, live signal, action
  tealDark:     '#0D9488',
  tealLight:    '#E6FBF8',
  lime:         '#B8FF2C', // AI Lime — premium accent, use sparingly
  limeSoft:     '#F1FFCE',

  // Secondary
  compliance:   '#1D4ED8', // Compliance Blue
  complianceLight: '#EAF0FE',
  slate:        '#64748B', // Slate Steel — muted enterprise neutral
  mint:         '#34D399', // Health Mint — positive state
  amber:        '#F59E0B', // Risk Amber — warning state
  coral:        '#EF4444', // Critical Coral — critical risk

  // Neutral
  fog:          '#F8FAFC', // Fog White — background
  ink:          '#111827', // Deep Text

  // System
  bg:           '#F8FAFC',
  bgAlt:        '#F1F5F9',
  white:        '#FFFFFF',
  text:         '#111827',
  textMuted:    '#64748B',
  textLight:    '#94A3B8',
  border:       '#E2E8F0',
  borderStrong: '#CBD5E1',
} as const

export const gradients = {
  // Signature NormSafety gradient — midnight → teal
  signature:    'linear-gradient(135deg, #0B1535 0%, #14B8A6 100%)',
  aiSignal:     'linear-gradient(135deg, #14B8A6 0%, #B8FF2C 100%)',
  compliance:   'linear-gradient(135deg, #0B1535 0%, #1D4ED8 100%)',
  riskHeat:     'linear-gradient(135deg, #34D399 0%, #F59E0B 50%, #EF4444 100%)',
  subtle:       'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
} as const

export const typography = {
  fontEn:   "'Sora', system-ui, -apple-system, sans-serif",
  fontAr:   "'IBM Plex Sans Arabic', 'Meral Sans', sans-serif",
  fontArHero: "'Meral Sans', 'IBM Plex Sans Arabic', sans-serif",
  fontMono: "'JetBrains Mono', ui-monospace, monospace",
  weights: { light: 300, regular: 400, medium: 500, semi: 600, bold: 700, extra: 800 },
  scale: {
    xs:   '0.75rem',
    sm:   '0.875rem',
    base: '1rem',
    lg:   '1.125rem',
    xl:   '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
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
  sm:   '0 1px 2px 0 rgba(11,21,53,0.05)',
  md:   '0 4px 6px -1px rgba(11,21,53,0.08), 0 2px 4px -1px rgba(11,21,53,0.04)',
  lg:   '0 10px 15px -3px rgba(11,21,53,0.10), 0 4px 6px -2px rgba(11,21,53,0.04)',
  xl:   '0 20px 25px -5px rgba(11,21,53,0.10), 0 10px 10px -5px rgba(11,21,53,0.03)',
  glow: '0 0 48px rgba(20,184,166,0.25)',
  aiGlow: '0 0 60px rgba(184,255,44,0.35)',
} as const

export const motion = {
  durations: { fast: 0.2, base: 0.4, slow: 0.6, slower: 0.8 },
  easings: {
    ease:    [0.25, 0.1, 0.25, 1.0] as const,
    easeOut: [0.0, 0.0, 0.2, 1.0]  as const,
    spring:  { type: 'spring' as const, stiffness: 100, damping: 20 },
  },
} as const
