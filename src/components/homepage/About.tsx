import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, Sparkles, Globe, Star } from 'lucide-react';
import InteractiveCard from '../common/InteractiveCard';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms (simplified)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const features = [
    {
      icon: Brain,
      title: 'ICT Methodology',
      description: 'Institutional Trading Concepts',
      color: 'primary',
      gradient: 'var(--gradient-blue)'
    },
    {
      icon: Sparkles,
      title: 'Smart Money Concepts',
      description: 'Think Like Institutions',
      color: 'secondary',
      gradient: 'var(--gradient-green)'
    },
    {
      icon: Globe,
      title: 'Volume Spread Analysis',
      description: 'Professional Market Analysis',
      color: 'accent',
      gradient: 'var(--gradient-yellow-orange)'
    },
    {
      icon: Star,
      title: 'Proven Results',
      description: '80%+ Win Rate on Signals',
      color: 'highlight',
      gradient: 'var(--gradient-pink)'
    }
  ];

  return (
    <section id="about" ref={aboutRef} className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden py-24 px-4 md:px-8" style={{ background: 'var(--gradient-bg)' }}>
      {/* 3D Background Elements */}
      <motion.div 
        className="absolute inset-0 z-[1]"
        style={{ y: backgroundY, transformStyle: 'preserve-3d' }}
      >
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className={`absolute bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-lg ${
                i === 0 ? 'w-15 h-15 top-[10%] left-[10%]' :
                i === 1 ? 'w-10 h-10 top-[20%] right-[15%]' :
                i === 2 ? 'w-20 h-20 top-[30%] left-[20%]' :
                i === 3 ? 'w-12.5 h-12.5 top-[40%] right-[25%]' :
                i === 4 ? 'w-17.5 h-17.5 top-[50%] left-[15%]' :
                i === 5 ? 'w-11.25 h-11.25 top-[60%] right-[20%]' :
                i === 6 ? 'w-16.25 h-16.25 top-[70%] left-[25%]' :
                i === 7 ? 'w-13.75 h-13.75 top-[80%] right-[10%]' :
                i === 8 ? 'w-8.75 h-8.75 top-[15%] left-[50%]' :
                i === 9 ? 'w-18.75 h-18.75 top-[25%] right-[40%]' :
                i === 10 ? 'w-12 h-12 top-[35%] left-[60%]' :
                i === 11 ? 'w-15.5 h-15.5 top-[45%] right-[50%]' : ''
              }`}
              style={{ transformStyle: 'preserve-3d' }}
              animate={{
                y: [0, -30, 0],
                rotateZ: [0, 360],
                rotateX: [0, 180, 0],
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px, 50px 50px',
          backgroundPosition: '0 0, 25px 25px'
        }}>
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
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

      <div className="relative flex flex-col items-center justify-center gap-10 z-[2] max-w-[1400px] mx-auto" style={{ transformStyle: 'preserve-3d', paddingTop: '5rem', paddingBottom: '5rem' }}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 flex flex-col items-center gap-10"
          style={{ transformStyle: 'preserve-3d', marginLeft: '2rem', marginRight: '2rem' }}
          initial={{ opacity: 0, y: 50, rotateX: -30 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-indigo-500/30 rounded-full backdrop-blur-[10px] mb-8 relative cursor-pointer transition-all duration-300"
            style={{ transformStyle: 'preserve-3d', padding: '0.5rem 1rem' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, rotateY: 5 }}
          >
            <div className="absolute -top-0.5 -left-0.5 -right-0.5 -bottom-0.5 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full opacity-30 blur-2xl -z-10" />
            <Sparkles className="w-5 h-5 text-indigo-500" style={{ transform: 'translateZ(5px)' }} />
            <span className="text-sm font-semibold tracking-[0.05em]" style={{ transform: 'translateZ(3px)', padding: '0.5rem 1rem', color: 'var(--text-secondary)'}}>ABOUT US</span>
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" style={{ transform: 'translateZ(3px)' }} />
          </motion.div>

          <motion.div
            className="text-4xl md:text-5xl xl:text-6xl font-extrabold mb-6"
            style={{ transformStyle: 'preserve-3d' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="block"
              style={{
                background: 'var(--gradient-white-gray)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                backgroundSize: '200% 100%',
                transform: 'translateZ(10px)'
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              About
            </motion.div>
            <motion.div
              className="block"
              style={{
                background: 'var(--gradient-blue)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                transform: 'translateZ(8px)'
              }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Rao Umer
            </motion.div>
          </motion.div>

          <motion.div
            className="text-lg md:text-xl max-w-[600px] mx-auto leading-relaxed"
            style={{ color: 'var(--text-secondary)', transform: 'translateZ(5px)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            Rao Umer, the founder of RTC (Rao Trading Concept), is a seasoned Forex trader with 6+ years of market experience. 
            He developed RTC by combining ICT, Smart Money Concepts (SMC), and Volume Spread Analysis (VSA) into one complete 
            trading methodology. RTC trains traders to think like institutions, not retail gamblers.
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="w-full flex items-center" style={{ transformStyle: 'preserve-3d', marginTop: '2rem', marginBottom: '2rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
          {/* Features Grid */}
          <motion.div
            className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-4 gap-6 w-full"
            style={{ transformStyle: 'preserve-3d' }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <InteractiveCard
                key={index}
                className="relative transition-all duration-300 cursor-pointer overflow-hidden flex flex-col items-center justify-between group gap-4"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '20px',
                  padding: '2rem',
                  backdropFilter: 'blur(10px)'
                }}
                delay={index * 0.1}
              >
                {/* Hover effects removed - cards are now static */}
                <div 
                  className="w-12 h-12 md:w-15 md:h-15 rounded-2xl flex items-center justify-center mb-4 md:mb-6 relative"
                  style={{
                    background: feature.gradient,
                    transformStyle: 'preserve-3d',
                    boxShadow: '0 15px 40px rgba(99, 102, 241, 0.3)'
                  }}
                >
                  <feature.icon className="w-6 h-6 md:w-7 md:h-7" style={{ transform: 'translateZ(10px)', color: 'white' }} />
                </div>
                <div className="text-center">
                  <h3 className="text-lg md:text-xl font-bold mb-2" style={{ transform: 'translateZ(8px)', color: 'var(--text-primary)' }}>{feature.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ transform: 'translateZ(5px)', color: 'var(--text-secondary)' }}>{feature.description}</p>
                </div>
                <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none" style={{ transform: 'translateZ(1px)' }} />
              </InteractiveCard>
            ))}
          </motion.div>
        </div>          
      </div>
    </section>
  );
};

export default About;