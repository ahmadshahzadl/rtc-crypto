import React from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  style = {}
}) => {
  const { mousePosition, cardRef, handleMouseEnter, handleMouseLeave, handleMouseMove } = useMousePosition();

  // Calculate hover direction based on mouse position
  const getHoverTransform = () => {
    if (!mousePosition.isHovering) return {};

    const { x, y } = mousePosition;
    
    // Calculate rotation based on mouse position
    const rotateX = (y - 50) * 0.1; // -5 to 5 degrees
    const rotateY = (x - 50) * 0.1; // -5 to 5 degrees
    
    // Calculate translation based on mouse position
    const translateX = (x - 50) * 0.1; // -5 to 5 pixels
    const translateY = (y - 50) * 0.1; // -5 to 5 pixels
    
    // Calculate scale based on distance from center
    const distanceFromCenter = Math.sqrt(Math.pow(x - 50, 2) + Math.pow(y - 50, 2));
    const scale = 1 + (distanceFromCenter * 0.002); // 1.0 to 1.1 scale

    return {
      rotateX,
      rotateY,
      translateX,
      translateY,
      scale
    };
  };

  const hoverTransform = getHoverTransform();

  return (
    <motion.div
      ref={cardRef}
      className={`relative transition-all duration-300 cursor-pointer overflow-hidden ${className}`}
      style={style}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay
      }}
      viewport={{ once: true }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      animate={{
        ...hoverTransform,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 30
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export default InteractiveCard;
