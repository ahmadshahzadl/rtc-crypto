import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import { Group } from "three";
import Orb from '../Orb';

// Mobile Bitcoin Model Component - Optimized for mobile centering
const MobileBitcoinModel: React.FC = () => {
  const groupRef = useRef<Group>(null);
  const { scene } = useGLTF("/base_basic_pbr.glb");

  useFrame((state) => {
    if (groupRef.current) {
      // Positioned slightly down from center for mobile
      groupRef.current.position.x = 0;
      groupRef.current.position.y = -1.3; // Move down from center
      groupRef.current.position.z = 0;

      // Gentle floating animation
      groupRef.current.position.y +=
        Math.sin(state.clock.elapsedTime * 0.8) * 0.1;

      // Continuous rotation
      groupRef.current.rotation.y += 0.015;
      groupRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.2) * 0.05;

      // Mobile optimized scale
      groupRef.current.scale.setScalar(2.2);
    }
  });

  if (!scene) return null;

  return (
    <group ref={groupRef}>
      <primitive object={scene.clone()} />
    </group>
  );
};

interface HeroProps {
  showContent?: boolean;
}

const Hero: React.FC<HeroProps> = ({ showContent = true }) => {
  const [contentVisible, setContentVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  // const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    if (showContent) {
      setContentVisible(true);
    }
  }, [showContent]);

  // Detect mobile screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen overflow-hidden flex items-center justify-center py-4 md:py-8"
      style={{ background: "var(--gradient-bg)" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-bg)" }}
      />

      {/* Orb Background - Right Half - Desktop Only */}
      <div 
        className="absolute z-[1] hidden xl:block"
        style={{ 
          width: '100%', 
          height: '100%', 
          position: 'absolute',
          top: 0,
          left: '70%',
          transform: 'translateX(-50%)',
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          pointerEvents: 'auto'
        }}
      >
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={290}
          forceHoverState={false}
        />
        </div>

      {/* Logo in Center of Orb - Desktop Only */}
      <div 
        className="absolute z-[10] items-center justify-center pointer-events-none hidden xl:flex"
        style={{
          width: '100%',
          height: '100%',
          top: 0,
          left: '70%',
          transform: 'translateX(-50%)'
        }}      
      >
          <img
            src="/logo-hero.png"
            alt="RTC Logo"
            className="w-[400px] h-[400px] object-contain"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)',
              WebkitFontSmoothing: 'antialiased',
            }}
          />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-[2] w-full max-w-[1200px] mx-auto px-4 md:px-8"
        style={{ y: textY, opacity: opacity, paddingTop: isMobile ? '15vh' : '0' }}
      >
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-16 items-center min-h-[80vh] overflow-visible">
          {/* Left Side Content */}
          <div className="flex flex-col gap-6 text-center xl:text-left items-center xl:items-start">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-[10px] w-fit text-[0.9rem] font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={
                contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                paddingLeft: "1rem",
                paddingRight: "1rem",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
                background: "var(--bg-glass)",
                border: "1px solid var(--border-primary)",
                color: "var(--text-secondary)",
              }}
            >
              <Star className="w-4 h-4" style={{ color: "var(--icon-star)" }} />
              <span>Trusted by 1M+ users worldwide</span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              className="text-[4rem] md:text-[3rem] xl:text-[3.5rem] font-extrabold leading-[1.1] m-0"
              initial={{ opacity: 0, y: 30 }}
              animate={
                contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                width: "90%",
                maxWidth: "600px",
                color: "var(--text-primary)",
              }}
            >
              Master the Markets
              <span
                style={{
                  background: "var(--gradient-hero-title)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                  display: "inline-block",
                }}
              >
                &nbsp;with RTC
              </span>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              className="text-base md:text-[1.1rem] xl:text-xl leading-[1.6] m-0 w-[90%] max-w-[500px]"
              initial={{ opacity: 0, y: 20 }}
              animate={
                contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ color: "var(--text-secondary)" }}
            >
              Rao Umer, the founder of RTC (Rao Trading Concept), is a seasoned
              Forex trader with 6+ years of market experience.
            </motion.div>

            {/* Call to Action */}
            <motion.a
              href="#get-started"
              className="rounded-full font-semibold text-lg active:scale-95 flex items-center justify-center gap-2 hover:scale-105 text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300"
              style={{
                padding: "0.75rem 1.5rem",
                background: "var(--gradient-primary)",
                border: "1px solid var(--border-primary)",
                boxShadow: "0 4px 15px rgba(236, 72, 153, 0.3)",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "white",
              }}
            >
              <img
                src="/discord-logo.png"
                alt="Discord Icon"
                width="24"
                height="24"
                className="hover:rotate-360 transition-transform"
              />
              Join Discord
            </motion.a>

            {/* Stats */}
            <motion.div
              className="flex gap-6 md:gap-8 flex-wrap justify-center xl:justify-start md:items-center xl:flex-row xl:items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={
                contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="text-center xl:text-left">
                <div
                  className="text-2xl font-extrabold mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  10K+
                </div>
                <div
                  className="text-[0.9rem] font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Active Users
                </div>
              </div>
              <div className="text-center xl:text-left">
                <div
                  className="text-2xl font-extrabold mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  99.9%
                </div>
                <div
                  className="text-[0.9rem] font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Uptime
                </div>
              </div>
              <div className="text-center xl:text-left">
                <div
                  className="text-2xl font-extrabold mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  24/7
                </div>
                <div
                  className="text-[0.9rem] font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Support
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile 3D Model Background - Positioned slightly from top - Hidden on Desktop */}
        {isMobile && (
          <motion.div
            className="absolute inset-0 z-[1]"
            initial={{ opacity: 0 }}
            animate={contentVisible ? { opacity: 0.3 } : { opacity: 0 }}
            transition={{ duration: 1.0, delay: 0.4 }}
            style={{
              pointerEvents: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "10vh", // Move the model down from the top
            }}
          >
            <Canvas
              camera={{
                position: [0, 0, 6],
                fov: 60,
                near: 0.1,
                far: 1000,
              }}
              shadows
              gl={{
                antialias: true,
                alpha: true,
                powerPreference: "high-performance",
              }}
              style={{
                width: "100%",
                height: "100%",
                background: "transparent",
                zIndex: 1,
                pointerEvents: "none",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              dpr={[1, 1.5]}
            >
              <Environment preset="studio" />
              <ambientLight intensity={0.3} />
              <directionalLight
                position={[5, 5, 5]}
                intensity={0.8}
                castShadow
              />
              <pointLight
                position={[-3, 3, 3]}
                intensity={0.4}
                color="#fbbf24"
              />
              <pointLight
                position={[3, -3, -3]}
                intensity={0.3}
                color="#8b5cf6"
              />

              {/* Mobile Bitcoin Model */}
              <MobileBitcoinModel />
            </Canvas>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;
