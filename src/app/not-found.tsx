"use client"
import React, { useState, useEffect } from 'react';
import { Home, ArrowLeft, } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function NotFound(){
   const route = useRouter()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Track mouse movement for interactive background
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate floating elements
  useEffect(() => {
    const elements = [];
    for (let i = 0; i < 20; i++) {
      elements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
      });
    }
  }, []);

  const handleGoHome = () => {
   route.push('/')
   console.log('Navigate to home');
   
  };

  const handleGoBack = () => {
    route.push('/')
    console.log('Navigate to home');
    window.history.back();
  };
;

  return (
    <div className="min-h-screen m-[-2rem] bg-gradient-to-br from-white via-gray-200 to-blue-200 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        
        {/* Interactive glow effect */}
        <div
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transform: `scale(${isHovered ? 1.5 : 1})`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* 404 Number with Animation */}
        <div className="relative mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
            404
          </h1>
          
          {/* Glitch effect overlay */}
          <div className="absolute inset-0 text-8xl md:text-9xl font-bold text-cyan-400 opacity-30 animate-ping">
            404
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h2>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            onClick={handleGoHome}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 transform active:scale-95"
          >
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>Go Home</span>
            </div>
            <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
          </button>

          <button
            onClick={handleGoBack}
            className="group px-8 py-4 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105 transform active:scale-95"
          >
            <div className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              <span>Go Back</span>
            </div>
          </button>
        </div>

        {/* Helpful Message */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm max-w-lg mx-auto">
            If you believe this is a mistake, please contact our support team. 
            We are always here to help you find what you are looking for!
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent" />
      
      {/* Animated Border */}
      <div className="absolute inset-0 border-4 border-transparent bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 animate-pulse" 
           style={{ 
             borderImage: 'linear-gradient(45deg, rgba(147, 51, 234, 0.3), rgba(236, 72, 153, 0.3), rgba(6, 182, 212, 0.3)) 1',
             borderImageSlice: 1 
           }} />
    </div>
  );
};

