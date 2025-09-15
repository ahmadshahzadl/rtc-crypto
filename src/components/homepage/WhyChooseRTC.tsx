import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Target, 
  Globe, 
  Sparkles, 
  Star, 
  Brain
} from 'lucide-react';
import InteractiveCard from '../common/InteractiveCard';

const WhyChooseRTC: React.FC = () => {
  const whyChooseRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: whyChooseRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms (simplified)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const features = [
    {
      icon: Globe,
      title: 'Professional Forex Signals',
      description: 'Not Gambling - Get accurate signals based on institutional analysis',
      gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      stats: '80%+ Win Rate'
    },
    {
      icon: Star,
      title: 'Mentorship Tailored',
      description: 'For Pakistani Traders - Learn from someone who understands your market',
      gradient: 'linear-gradient(135deg, #10b981, #06d6a0)',
      stats: '6+ Years Experience'
    },
    {
      icon: Brain,
      title: 'Proven Method',
      description: 'ICT + SMC + VSA Combined - Complete trading methodology',
      gradient: 'linear-gradient(135deg, #f59e0b, #f97316)',
      stats: 'Institutional Approach'
    },
    {
      icon: Globe,
      title: 'Active Community',
      description: 'Discord Community & 24/7 Support - Never trade alone',
      gradient: 'linear-gradient(135deg, #ec4899, #be185d)',
      stats: '10K+ Members'
    }
  ];

  const comparisonFeatures = [
    {
      category: 'Trading Signals',
      rtc: {
        title: 'Professional Forex Signals',
        description: 'Live signals with 80%+ win rate',
        features: ['Real-time Discord alerts', 'Gold & Major pairs', 'Institutional analysis', 'Risk management'],
        icon: Target,
        gradient: 'linear-gradient(135deg, #10b981, #06d6a0)',
        price: 'Premium Quality'
      },
      others: {
        title: 'Basic Signal Services',
        description: 'Generic signals with poor accuracy',
        features: ['Delayed notifications', 'Limited pairs', 'No analysis provided', 'High risk'],
        icon: Globe,
        gradient: 'linear-gradient(135deg, #ef4444, #dc2626)',
        price: 'Low Quality'
      }
    },
    {
      category: 'Education & Mentorship',
      rtc: {
        title: 'RTC Mentorship Program',
        description: '40-day structured training program',
        features: ['ICT + SMC + VSA', 'Personalized guidance', 'Live trading sessions', 'Lifetime access'],
        icon: Brain,
        gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        price: 'Comprehensive'
      },
      others: {
        title: 'Generic Trading Courses',
        description: 'Basic courses with limited value',
        features: ['Outdated content', 'No personal guidance', 'Pre-recorded videos only', 'Limited support'],
        icon: Star,
        gradient: 'linear-gradient(135deg, #6b7280, #4b5563)',
        price: 'Basic'
      }
    },
    {
      category: 'Community & Support',
      rtc: {
        title: 'Active Trading Community',
        description: '10K+ members strong community',
        features: ['24/7 Discord support', 'Live market discussions', 'Peer learning', 'Expert moderators'],
        icon: Sparkles,
        gradient: 'linear-gradient(135deg, #ec4899, #be185d)',
        price: 'Premium Support'
      },
      others: {
        title: 'Basic Support Groups',
        description: 'Limited community interaction',
        features: ['Minimal support', 'No live discussions', 'Self-service only', 'Poor moderation'],
        icon: Globe,
        gradient: 'linear-gradient(135deg, #6b7280, #4b5563)',
        price: 'Limited'
      }
    }
  ];

  return (
    <section ref={whyChooseRef} className="why-choose-section-3d">
      {/* 3D Background Elements */}
      <motion.div 
        className="why-choose-3d-background"
        style={{ y: backgroundY }}
      >
        {/* Floating Geometric Shapes */}
        <div className="why-choose-floating-shapes">
          {Array.from({ length: 18 }).map((_, i) => (
            <motion.div
              key={i}
              className={`why-choose-shape why-choose-shape-${i}`}
              animate={{
                y: [0, -40, 0],
                rotateZ: [0, 360],
                rotateX: [0, 180, 0],
              }}
              transition={{
                duration: 9 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="why-choose-grid-pattern">
          {Array.from({ length: 45 }).map((_, i) => (
            <motion.div
              key={i}
              className="why-choose-grid-dot"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                delay: i * 0.08,
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="why-choose-container-3d">
        {/* Section Header */}
        <motion.div
          className="why-choose-header-3d"
          initial={{ opacity: 0, y: 50, rotateX: -30 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="why-choose-badge-3d"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, rotateY: 5 }}
          >
            <div className="badge-3d-glow" />
            <Globe className="badge-3d-icon" />
            <span className="badge-3d-text">WHY CHOOSE US</span>
            <div className="badge-3d-indicator" />
          </motion.div>

          <motion.h2
            className="why-choose-title-3d"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="why-choose-title-line-1"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              Why Choose
            </motion.span>
            <motion.span
              className="why-choose-title-line-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Our Services?
            </motion.span>
          </motion.h2>

          <motion.p
            className="why-choose-description-3d"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Discover what makes us the preferred choice for digital innovation and creative solutions
          </motion.p>
        </motion.div>

        {/* 3D Features Grid */}
        <motion.div
          className="why-choose-features-3d"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="why-choose-3d-grid">
            {features.map((feature, index) => (
              <InteractiveCard
                key={index}
                className="why-choose-card-3d"
                delay={index * 0.1}
              >
                <div className="why-choose-card-3d-glow" />
                
                {/* Icon */}
                <div
                  className="why-choose-icon-3d"
                  style={{ background: feature.gradient }}
                >
                  <feature.icon className="why-choose-icon-3d-svg" />
                </div>

                {/* Content */}
                <div className="why-choose-content-3d">
                  <h3 className="why-choose-feature-title-3d">{feature.title}</h3>
                  <p className="why-choose-feature-description-3d">{feature.description}</p>
                  
                  {/* Stats Badge */}
                  <div className="why-choose-stats-3d">
                    <Target className="stats-icon-3d" />
                    <span className="stats-text-3d">{feature.stats}</span>
                  </div>
                </div>

                {/* Card Border */}
                <div className="why-choose-card-3d-border" />
              </InteractiveCard>
            ))}
          </div>
        </motion.div>

        {/* Simple Comparison Section */}
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          style={{ 
            padding: '4rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Section Header */}
          <div 
            className="text-center" 
            style={{ 
              marginBottom: '4rem',
              maxWidth: '1200px',
              width: '100%'
            }}
          >
            <motion.h2
              className="font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              style={{
                color: 'var(--text-primary)', 
                fontSize: '3.5rem',
                fontWeight: '800',
                marginBottom: '1.5rem',
                transformStyle: 'preserve-3d'
              }}
            >
              Why Choose <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">RTC</span>?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              style={{
                color: 'var(--text-secondary)', 
                fontSize: '1.25rem',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6',
                transform: 'translateZ(5px)'
              }}
            >
              See the difference between our premium services and basic alternatives
            </motion.p>
          </div>

          {/* Two Column Comparison - Single Cards */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
              gap: '2rem',
              maxWidth: '1200px',
              width: '100%',
              justifyContent: 'center'
            }}
          >
            {/* Left Column - All RTC Features */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative rounded-2xl h-full cursor-pointer group"
                style={{
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 214, 160, 0.05) 50%, rgba(0, 0, 0, 0.3) 100%)',
                  border: '2px solid rgba(16, 185, 129, 0.3)',
                  boxShadow: '0 20px 40px -12px rgba(16, 185, 129, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  padding: '2rem'
                }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -8,
                  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
              >
                {/* Hover effects removed - cards are now static */}
                {/* Header */}
                <div style={{ marginBottom: '2rem' }}>
                  <h3 className="text-2xl font-bold" style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
                    ✅ RTC Premium Features
              </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                </div>

                {/* All Features List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {comparisonFeatures.map((comparison, comparisonIndex) => (
                    <div key={comparisonIndex}>
                      {/* Category Subheader */}
                      <h4 className="text-lg font-semibold text-green-300" style={{ marginBottom: '1rem' }}>
                        {comparison.category}
                      </h4>
                      
                      {/* Features for this category */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                        {comparison.rtc.features.map((feature, featureIndex) => (
                  <motion.div
                            key={`${comparisonIndex}-${featureIndex}`}
                            className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.4 + (comparisonIndex * 0.2) + (featureIndex * 0.1) }}
                    viewport={{ once: true }}
                            style={{ gap: '1rem' }}
                          >
                            <div 
                              className="bg-green-500 rounded-full flex items-center justify-center flex-shrink-0"
                              style={{
                                background: 'linear-gradient(135deg, #10b981, #06d6a0)',
                                boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                width: '1.5rem',
                                height: '1.5rem',
                                marginTop: '0.25rem'
                              }}
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'var(--text-primary)' }}>
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed">{feature}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - All Basic Service Limitations */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative rounded-2xl h-full cursor-pointer group"
                style={{
                  background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(220, 38, 38, 0.05) 50%, rgba(0, 0, 0, 0.3) 100%)',
                  border: '2px solid rgba(239, 68, 68, 0.3)',
                  boxShadow: '0 20px 40px -12px rgba(239, 68, 68, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  padding: '2rem'
                }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -8,
                  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
              >
                {/* Hover effects removed - cards are now static */}
                {/* Header */}
                <div style={{ marginBottom: '2rem' }}>
                  <h3 className="text-2xl font-bold" style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
                    ❌ Basic Service Limitations
              </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full"></div>
                </div>

                {/* All Limitations List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {comparisonFeatures.map((comparison, comparisonIndex) => (
                    <div key={comparisonIndex}>
                      {/* Category Subheader */}
                      <h4 className="text-lg font-semibold text-red-300" style={{ marginBottom: '1rem' }}>
                        {comparison.category}
                      </h4>
                      
                      {/* Limitations for this category */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                        {comparison.others.features.map((feature, featureIndex) => (
                  <motion.div
                            key={`${comparisonIndex}-${featureIndex}`}
                            className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.6 + (comparisonIndex * 0.2) + (featureIndex * 0.1) }}
                    viewport={{ once: true }}
                            style={{ gap: '1rem' }}
                          >
                            <div 
                              className="bg-red-500 rounded-full flex items-center justify-center flex-shrink-0"
                              style={{
                                background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                                boxShadow: '0 4px 12px rgba(239, 68, 68, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                width: '1.5rem',
                                height: '1.5rem',
                                marginTop: '0.25rem'
                              }}
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'var(--text-primary)' }}>
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed line-through">{feature}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseRTC;