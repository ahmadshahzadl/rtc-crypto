import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, ContactShadows, OrbitControls } from '@react-three/drei';
import { Group } from 'three';

// Loading component - removed to show only the Bitcoin model

// Load the GLB models
function useGLTFModel(url: string) {
  return useGLTF(url);
}

// Main 3D Model Component with mouse interaction
const Model3D: React.FC = () => {
  const groupRef = useRef<Group>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Load the shaded model (cleaner look)
  const { scene } = useGLTFModel('/base_basic_pbr.glb');
  
  // Mouse movement handler
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Center the coin in the canvas
      const baseX = 0; // Centered horizontally
      const baseY = 0; // Centered vertically
      
      // Enhanced mouse hover movement (more interactive)
      const mouseInfluenceX = mousePosition.x * 0.8; // Increased X movement
      const mouseInfluenceY = mousePosition.y * 0.6; // Increased Y movement
      
      // Apply position with enhanced mouse influence and gentle floating
      groupRef.current.position.x = baseX + mouseInfluenceX;
      groupRef.current.position.y = baseY + mouseInfluenceY + Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
      groupRef.current.position.z = 2 + Math.cos(state.clock.elapsedTime * 0.8) * 0.15;
      
      // Smooth 360-degree rotation around Y-axis
      groupRef.current.rotation.x = -0.5 + mouseInfluenceY * 0.3; // Slight tilt based on Y
      groupRef.current.rotation.y += 0.04; // Continuous Y-axis rotation
      groupRef.current.rotation.z = 0;
    }
  });

  // Ensure the model is properly centered and scaled
  if (scene) {
    scene.traverse((child) => {
      if ('isMesh' in child && child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }

  return (
    <group ref={groupRef}>
      {/* Main GLB Model */}
      {scene && (
        <primitive 
          object={scene.clone()} 
          scale={[2.8, 2.8, 2.8]} 
          position={[0, -2, 0]}
        />
      )}
    </group>
  );
};

const Scene: React.FC = () => {
  return (
    <>
      {/* Environment */}
      <Environment preset="studio" />
      
      {/* Enhanced Lighting for Right Side Visibility */}
      <ambientLight intensity={0.6} />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={1.5} 
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-3, 3, 3]} intensity={1.0} color="#fbbf24" />
      <pointLight position={[3, -3, -3]} intensity={0.8} color="#8b5cf6" />
      <spotLight 
        position={[0, 8, 0]} 
        intensity={0.8} 
        angle={0.4} 
        penumbra={0.3}
        color="#f59e0b"
      />
      
      {/* Model - Interactive with mouse */}
      <Model3D />
      
      {/* Mouse Controls - Disabled for fixed position */}
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        autoRotate={false}
        enabled={false}
      />
      
      {/* Enhanced Shadows */}
      <ContactShadows 
        position={[0, -2, 0]} 
        opacity={0.3} 
        scale={10} 
        blur={0} 
        far={4} 
        resolution={256} 
        color="#000000" 
      />
    </>
  );
};

interface ThreeDModelProps {
  className?: string;
}

const ThreeDModel: React.FC<ThreeDModelProps> = () => {
  return (
    <Canvas
      camera={{ 
        position: [0, 0, 8], 
        fov: 60,
        near: 0.1,
        far: 1000
      }}
      shadows
      gl={{ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance"
      }}
      style={{ 
        position: 'absolute',
        top: '50%', // Center vertically
        left: '50%', // Center horizontally
        transform: 'translate(-50%, -50%)', // Adjust for perfect centering
        width: '100%',
        height: '100%',
        background: 'transparent',
        zIndex: 1,
        pointerEvents: 'auto',
      }}
      dpr={[1, 2]}
    >
      <Scene />
    </Canvas>
  );
};

export default ThreeDModel;
