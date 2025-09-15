import { useState, useRef, useCallback } from 'react';

interface MousePosition {
  x: number;
  y: number;
  isHovering: boolean;
}

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    isHovering: false
  });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = useCallback(() => {
    setMousePosition(prev => ({ ...prev, isHovering: true }));
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePosition(prev => ({ ...prev, isHovering: false }));
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({
      x: (x / rect.width) * 100, // Convert to percentage
      y: (y / rect.height) * 100, // Convert to percentage
      isHovering: true
    });
  }, []);

  return {
    mousePosition,
    cardRef,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove
  };
};
