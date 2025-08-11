// src/utils/constants.ts
export const NAVIGATION_ITEMS = [
  'About',
  'My Work', 
  'Articles',
  'Contact'
] as const;

export const COLORS = {
  primary: '#050505',
  secondary: '#1D1D1F',
  light: '#FCFCF9',
  lighter: '#F5F5F7',
  gray: '#E5E5E5',
  textGray: '#515154',
  textLight: '#CFCFCF'
} as const;

// Modern breakpoint values aligned with Tailwind defaults
export const BREAKPOINTS = {
  xs: 475,     // Large phones (475px+)
  sm: 640,     // Small tablets (640px+)  
  md: 768,     // Tablets (768px+)
  lg: 1024,    // Small laptops (1024px+)
  xl: 1280,    // Large laptops (1280px+)
  '2xl': 1536, // Desktops (1536px+)
} as const;