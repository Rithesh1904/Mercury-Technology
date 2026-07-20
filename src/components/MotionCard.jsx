import React, { useRef, useState } from 'react';

export default function MotionCard({ children, className = "" }) {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top;  // y position within the element.

    setMousePos({ x, y });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation: max 15 degrees
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      style={{
        perspective: '1000px',
        width: '100%',
        height: '100%',
      }}
      className={className}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transform: isHovered
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.05)`
            : 'rotateX(0deg) rotateY(0deg) scale(1)',
          transition: isHovered
            ? 'none' // No delay while moving
            : 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)', // Smooth snap back
          position: 'relative',
          borderRadius: '1rem', // Match rounded-4
          // overflow: 'hidden', // Removed so absolute badges can pop out
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: isHovered 
            ? '0 20px 40px rgba(0,0,0,0.2)' 
            : '0 4px 6px rgba(0,0,0,0.1)',
        }}
      >
        {/* Dynamic Glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 60%)`,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Parallax Content Wrapper */}
        <div
          style={{
            width: '100%',
            height: '100%',
            transform: isHovered ? 'translateZ(50px)' : 'translateZ(0px)',
            transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
