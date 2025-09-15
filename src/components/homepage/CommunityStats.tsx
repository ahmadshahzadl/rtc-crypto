import React, { useRef } from 'react';
import { color, motion, useScroll, useTransform } from 'framer-motion';
import { Users, Award, Sparkles, Globe, Star, Target } from 'lucide-react';
import InteractiveCard from '../common/InteractiveCard';

const CommunityStats: React.FC = () => {
  const communityRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: communityRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms (simplified)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const stats = [
    {
      icon: Users,
      number: '10,000+',
      label: 'Active Members',
      description: 'Growing community of dedicated traders',
      gradient: 'var(--gradient-blue)',
      delay: 0.2,
      color: 'var(--icon-community)'
    },
    {
      icon: Target,
      number: '80%+',
      label: 'Verified Win Rate on Forex Signals',
      description: 'Proven track record of successful trades',
      gradient: 'var(--gradient-green)',
      color: 'var(--icon-community)',
      delay: 0.4
    },
    {
      icon: Globe,
      number: 'News Trade',
      label: 'Experts',
      description: 'Mastering High-Impact Events',
      gradient: 'var(--gradient-yellow-orange)',
      color: 'var(--icon-community)',
      delay: 0.6
    },
    {
      icon: Award,
      number: 'Hundreds',
      label: 'Traders Mentored',
      description: 'Successful trading education and guidance',
      gradient: 'var(--gradient-pink)',
      color: 'var(--icon-community)',
      delay: 0.8
    }
  ];

  return (
    <section id="community" ref={communityRef} className="relative min-h-screen overflow-hidden" style={{ background: 'var(--gradient-bg)' }}>
      {/* 3D Background Elements */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        {/* Floating Geometric Shapes */}
        <div className="community-floating-shapes">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className={`community-shape community-shape-${i}`}
              animate={{
                y: [0, -40, 0],
                rotateZ: [0, 360],
                rotateX: [0, 180, 0],
              }}
              transition={{
                duration: 8 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="community-grid-pattern">
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div
              key={i}
              className="community-grid-dot"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="community-container-3d"
      style={{paddingTop: '4rem', paddingBottom: '4rem'}}
      >
        {/* Section Header */}
        <motion.div
          className="community-header-3d"
          initial={{ opacity: 0, y: 50, rotateX: -30 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="community-badge-3d"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, rotateY: 5 }}
          >
            <div className="badge-3d-glow" />
            <Sparkles className="badge-3d-icon" />
            <span className="badge-3d-text">COMMUNITY</span>
            <div className="badge-3d-indicator" />
          </motion.div>

          <motion.h2
            className="community-title-3d"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="community-title-line-1"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              Community
            </motion.span>
            <motion.span
              className="community-title-line-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Stats
            </motion.span>
          </motion.h2>

          <motion.p
            className="community-description-3d"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Join our thriving community of successful traders and learn from the best
          </motion.p>
        </motion.div>

        {/* 3D Stats Grid */}
        <motion.div
          className="community-stats-3d"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="stats-3d-grid">
            {stats.map((stat, index) => (
              <InteractiveCard
                key={index}
                className="stat-card-3d"
                delay={stat.delay}
              >
                <div className="stat-card-3d-glow" />
                
                {/* Icon Container */}
                <div className="stat-icon-3d-container">
                  <div
                    className="stat-icon-3d"
                  >
                    <stat.icon className="stat-icon-3d-svg" style={{ color: 'var(--icon-community)' }} />
                  </div>
                  
                  {/* Floating mini icons */}
                  <div
                    className="stat-mini-icon-3d stat-mini-1"
                  >
                    <Star className="mini-icon-3d" style={{ color: 'var(--icon-community)' }} />
                  </div>
                  
                  <div
                    className="stat-mini-icon-3d stat-mini-2"
                  >
                    <Sparkles className="mini-icon-3d" style={{ color: 'var(--icon-community)' }} />
                  </div>
                </div>

                {/* Content */}
                <div className="stat-content-3d">
                  <motion.div
                    className="stat-value-3d"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: stat.delay + 0.3,
                      type: 'spring',
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  <h3 className="stat-label-3d">{stat.label}</h3>
                  <p className="stat-description-3d">{stat.description}</p>
                </div>

                {/* Progress Bar */}
                <motion.div
                  className="stat-progress-3d-container"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: stat.delay + 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="stat-progress-3d-bar"
                    style={{ background: stat.gradient }}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1.5, delay: stat.delay + 0.7 }}
                    viewport={{ once: true }}
                  />
                </motion.div>

                {/* Corner Decoration */}
                <div className="stat-corner-3d-decoration">
                  <Globe className="corner-icon-3d" />
                </div>
              </InteractiveCard>
            ))}
          </div>
        </motion.div>

        {/* 3D Call to Action */}
        <motion.div
          className="community-cta-3d"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="community-cta-content-3d">
            <h3 className="community-cta-title-3d">Ready to Join Our Trading Community?</h3>
            <p className="community-cta-text-3d">
              Connect with thousands of successful traders and start your profitable trading journey today
            </p>
            <motion.button
              className="community-cta-button-3d"
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: '0 20px 40px rgba(99, 102, 241, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="cta-btn-text">Join Community</span>
              <motion.div
                className="cta-btn-icon"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                →
              </motion.div>
              <div className="cta-btn-3d-glow" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityStats;