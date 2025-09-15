import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Sparkles, Star, Globe } from 'lucide-react';
import InteractiveCard from '../common/InteractiveCard';

const Services: React.FC = () => {
  const servicesRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms (simplified)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const services = [
    {
      id: 1,
      icon: Globe,
      title: 'Forex Signals Group',
      description: 'Get accurate and professional forex signals directly from Rao Umer\'s analysis. Our signals cover gold and major forex pairs, delivered live in Discord',
      features: [
        { icon: Globe, text: 'Live Discord Signals' },
        { icon: Globe, text: 'Gold & Major Pairs' },
        { icon: Target, text: 'Professional Analysis' }
      ],
      gradient: 'var(--gradient-blue)',
      delay: 0.2
    },
    {
      id: 2,
      icon: Star,
      title: 'RTC Mentorship Program',
      description: 'A 40-day structured training designed for Pakistani traders to master ICT, Smart Money Concepts (SMC) and Volume Spread Analysis (VSA)',
      features: [
        { icon: Sparkles, text: '40-Day Training' },
        { icon: Star, text: 'ICT + SMC + VSA' },
        { icon: Target, text: 'For Pakistani Traders' }
      ],
      gradient: 'var(--gradient-green)',
      delay: 0.4
    }
  ];

  return (
    <section id="services" ref={servicesRef} className="services-section-3d">
      
      {/* 3D Background Elements */}
      <motion.div 
        className="services-3d-background"
        style={{ y: backgroundY }}
      >
        {/* Floating Geometric Shapes */}
        <div className="services-floating-shapes">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className={`services-shape services-shape-${i}`}
              animate={{
                y: [0, -50, 0],
                rotateZ: [0, 360],
                rotateX: [0, 180, 0],
              }}
              transition={{
                duration: 10 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="services-grid-pattern">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="services-grid-dot"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.08,
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="services-container-3d">
        {/* Section Header */}
        <motion.div
          className="services-header-3d"
          initial={{ opacity: 0, y: 50, rotateX: -30 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="services-badge-3d"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, rotateY: 5 }}
          >
            <div className="badge-3d-glow" />
            <Globe className="badge-3d-icon" />
            <span className="badge-3d-text">SERVICES</span>
            <div className="badge-3d-indicator" />
          </motion.div>

          <motion.h2
            className="services-title-3d"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="services-title-line-1"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              Creative
            </motion.span>
            <motion.span
              className="services-title-line-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Solutions
            </motion.span>
          </motion.h2>

          <motion.p
            className="services-description-3d"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Transform your ideas into stunning digital experiences with our comprehensive services
          </motion.p>
        </motion.div>

        {/* 3D Services Grid */}
        <motion.div
          className="services-grid-3d"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="services-3d-grid">
            {services.map((service, index) => (
              <InteractiveCard
                key={service.id}
                className="service-card-3d"
                style={{ color: 'var(--icon-community)' }}
                delay={service.delay}
              >
                <div className="service-card-3d-glow" />
                
                {/* Service Header */}
                <div className="service-header-3d">
                  <div
                    className="service-icon-3d"
                    style={{ background: service.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}
                  >
                    <service.icon className="service-icon-3d-svg" style={{ color: 'var(--icon-community)' }} />
                  </div>
                  <div className="service-badge-3d">
                    <span className="service-number-3d">0{index + 1}</span>
                  </div>
                </div>

                {/* Service Content */}
                <div className="service-content-3d">
                  <h3 className="service-title-3d">{service.title}</h3>
                  <p className="service-description-3d">{service.description}</p>

                  {/* Features List */}
                  <div className="service-features-3d">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="service-feature-3d"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="feature-check-3d">
                          <feature.icon className="feature-check-icon-3d" />
                        </div>
                        <span className="feature-text-3d">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Card Border */}
                <div className="service-card-3d-border" />
              </InteractiveCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;