import type { SocialLink, CommunityStats, Service, HeroContent, AboutContent, WhyChooseItem } from '../interfaces';

export interface ReelVideo {
  id: string;
  src: string;
  thumbnail?: string;
}

export const REELS_VIDEOS: ReelVideo[] = [
  {
    id: 'reel-1',
    src: '/insta/01.mp4'
  },
  {
    id: 'reel-2',
    src: '/insta/02.mp4'
  },
  {
    id: 'reel-3',
    src: '/insta/03.mp4'
  },
  {
    id: 'reel-4',
    src: '/insta/04.mp4'
  },
  {
    id: 'reel-5',
    src: '/insta/05.mp4'
  },
];

export const DISCORD_LINK = "https://discord.gg/rtc-trading";
export const YOUTUBE_LINK = "https://youtube.com/@rtctrading";
export const FACEBOOK_LINK = "https://facebook.com/rtctrading";
export const INSTAGRAM_LINK = "https://instagram.com/rtctrading";
export const TIKTOK_LINK = "https://tiktok.com/@rtctrading";

export const HERO_CONTENT: HeroContent = {
  headline: "Master the Markets with Rao Trading Concept (RTC)",
  subtext: "Pakistan's Leading Forex Trading Community – Join our Discord to get access to exclusive content",
  ctaText: "Join Our Discord",
  ctaLink: DISCORD_LINK
};

export const ABOUT_CONTENT: AboutContent = {
  title: "About Rao Umer",
  description: "Rao Umer, the founder of RTC (Rao Trading Concept), is a seasoned Forex trader with 6+ years of market experience. He developed RTC by combining ICT, Smart Money Concepts (SMC), and Volume Spread Analysis (VSA) into one complete trading methodology. RTC trains traders to think like institutions, not retail gamblers."
};

export const COMMUNITY_STATS: CommunityStats = {
  members: "10,000+",
  winRate: "80%+",
  newsTradeExperts: true,
  tradersMentored: "Hundreds"
};

export const SERVICES: Service[] = [
  {
    id: "forex-signals",
    title: "Forex Signals Group",
    description: "Get accurate and professional forex signals directly from Rao Umer's analysis. Our signals cover gold and major forex pairs, delivered live in Discord.",
    ctaText: "Get Forex Signals Now",
    ctaLink: DISCORD_LINK
  },
  {
    id: "mentorship",
    title: "RTC Mentorship Program – Learn How the Banks Trade",
    description: "A 40-day structured training designed for Pakistani traders to master ICT, Smart Money Concepts (SMC) and Volume Spread Analysis (VSA).",
    ctaText: "Join RTC Mentorship Program",
    ctaLink: DISCORD_LINK
  }
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    title: "Professional Forex Signals",
    description: "Not Gambling - Real market analysis",
    icon: "📊"
  },
  {
    title: "Mentorship for Pakistani Traders",
    description: "Tailored specifically for Pakistani market conditions",
    icon: "🇵🇰"
  },
  {
    title: "Proven Method",
    description: "ICT + SMC + VSA Combined methodology",
    icon: "⚡"
  },
  {
    title: "Active Community",
    description: "Discord Community & 24/7 Support",
    icon: "💬"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "Discord", url: DISCORD_LINK, icon: "💬" },
  { name: "YouTube", url: YOUTUBE_LINK, icon: "📺" },
  { name: "Facebook", url: FACEBOOK_LINK, icon: "📘" },
  { name: "Instagram", url: INSTAGRAM_LINK, icon: "📷" },
  { name: "TikTok", url: TIKTOK_LINK, icon: "🎵" }
];

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" }
];
