import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  MessageCircle, 
  Youtube, 
  Facebook, 
  Instagram
} from 'lucide-react';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);


  const socialLinks = [
    { name: 'Discord', href: '#', icon: MessageCircle },
    { name: 'YouTube', href: '#', icon: Youtube },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'Facebook', href: '#', icon: Facebook } 
  ];

  return (
    <footer id="contact" ref={footerRef} className="relative overflow-hidden">
      {/* Footer Container with rounded design */}
      <div className="relative backdrop-blur-xl overflow-hidden" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-primary)' }}>
        {/* Background */}
        <motion.div 
          className="absolute inset-0 z-[1]"
          style={{ y: backgroundY }}
        >
          {/* Trading-themed background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{ background: 'var(--gradient-bg)' }}></div>
          </div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </motion.div>

        <div className="relative z-[2] w-full" style={{ padding: '3rem 2.5rem 2rem 2.5rem' }}>
        {/* Main Footer Content - Logo, Description, and Social Links in One Row */}
        <motion.div
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '2rem' }}
        >
          {/* Logo Section */}
          <img src="/header_logo.png" alt="RTC Logo" width={70} style={{ WebkitFilter: 'drop-shadow(0 2px 2px #d7c6f5)' }} />

          {/* Vertical Divider */}
          <div className="hidden lg:block w-px h-16 flex-shrink-0" style={{ background: 'var(--border-primary)' }}></div>

          {/* Description Section */}
          <div className="flex-1 max-w-md lg:max-w-lg">
            <p className="leading-relaxed text-sm lg:text-base" style={{ color: 'var(--text-secondary)' }}>
              Pakistan's premier forex trading community. Join thousands of successful traders mastering the markets with professional signals, expert mentorship, and proven ICT strategies.
            </p>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-px h-16 flex-shrink-0" style={{ background: 'var(--border-primary)' }}></div>

          {/* Social Links Section */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-15 h-15 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'var(--bg-card)', 
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border-secondary)',
                    padding: '1rem'
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconComponent className="w-4 h-4" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="flex justify-center items-center w-full"
          style={{ 
            marginTop: '3rem', 
            paddingTop: '2rem', 
            marginLeft: '0', 
            marginRight: '0',
            borderTop: '1px solid var(--border-primary)'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Copyright - Centered */}
          <div className="flex flex-col gap-1 text-center">
            <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              © 2025 Rao Trading Concept. All rights reserved.
            </div>
            <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
              Empowering Pakistani traders with professional forex education
            </div>
          </div>
        </motion.div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
