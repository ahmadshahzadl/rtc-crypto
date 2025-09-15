// TypeScript interfaces and types for RTC Trading Website

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface CommunityStats {
  members: string;
  winRate: string;
  newsTradeExperts: boolean;
  tradersMentored: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export interface TestimonialVideo {
  id: string;
  videoUrl: string;
  thumbnail: string;
  title: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroContent {
  headline: string;
  subtext: string;
  ctaText: string;
  ctaLink: string;
}

export interface AboutContent {
  title: string;
  description: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  icon: string;
}
