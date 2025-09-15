// Consistent icon mapping for RTC Trading Platform
export const ICONS = {
  // Navigation
  HOME: 'Code',
  ABOUT: 'User',
  SERVICES: 'Zap',
  COMMUNITY: 'Users',
  CONTACT: 'MessageCircle',
  MARKETS: 'TrendingUp',
  
  // Trading & Finance
  TRADING: 'TrendingUp',
  CHART: 'BarChart3',
  TARGET: 'Target',
  DOLLAR: 'DollarSign',
  ACTIVITY: 'Activity',
  GLOBE: 'Globe',
  
  // Features & Benefits
  SPARKLES: 'Sparkles',
  STAR: 'Star',
  SHIELD: 'Shield',
  BRAIN: 'Brain',
  ZAP: 'Zap',
  AWARD: 'Award',
  
  // UI Elements
  ARROW_RIGHT: 'ArrowRight',
  CHEVRON_DOWN: 'ChevronDown',
  MENU: 'Menu',
  X: 'X',
  PLAY: 'Play',
  PAUSE: 'Pause',
  VOLUME: 'Volume2',
  VOLUME_OFF: 'VolumeX',
  MAXIMIZE: 'Maximize',
  ROTATE: 'RotateCcw',
  
  // Social & Communication
  DISCORD: 'MessageCircle',
  YOUTUBE: 'Play',
  FACEBOOK: 'Globe',
  INSTAGRAM: 'Star',
  TIKTOK: 'Zap',
  TWITTER: 'Globe',
  
  // Status & Indicators
  LIVE: 'Target',
  SUCCESS: 'Check',
  ERROR: 'X',
  WARNING: 'AlertTriangle',
  INFO: 'Info',
  
  // Actions
  JOIN: 'ArrowRight',
  LEARN: 'ChevronDown',
  EXPLORE: 'Globe',
  CONNECT: 'MessageCircle',
} as const;

export type IconName = keyof typeof ICONS;
