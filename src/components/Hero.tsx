import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Dubai Real Estate Market';
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);  
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-black via-[#1a1a1a] to-[#111111] text-white overflow-hidden min-h-screen flex items-center">
<div className="absolute inset-0  bg-[url('https://plus.unsplash.com/premium_photo-1762323998313-5490d2d13fda?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687')]
  sm:bg-[url('https://plus.unsplash.com/premium_photo-1670185511068-d2d5803f1769?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169')] bg-cover bg-center opacity-50"></div>

      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C0C0C0] to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#C0C0C0] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full">
        <div className="text-center max-w-5xl mx-auto">
        
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 sm:mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block text-[#C0C0C0] mt-2 sm:mb-3 ">
             Best Town Global Associates
            </span>
            <span className="block text-[#C0C0C0]">Your Gateway to</span>
            <span className="block mt-2 relative">
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e3e3e3] via-[#C0C0C0] to-[#cbcccd] animate-shimmer bg-[length:200%_100%]">
                  {displayText}
                </span>
                {!isTypingComplete && (
                  <motion.span
                    className="inline-block w-0.5 h-12 sm:h-16 lg:h-20 bg-[#C0C0C0] ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  />
                )}
              </span>
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg lg:text-xl xl:text-2xl text-[#C0C0C0] mb-10 sm:mb-12 leading-relaxed max-w-4xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Unlock Dubai's Prestigious Real Estate Market: Receive Direct{' '}
            <span className="text-[#e3e3e3] font-semibold">CEO Mentorship</span>, Tap Into{' '}
            <span className="text-[#e3e3e3] font-semibold">Industry-Leading Commission Structures</span>, and Network with Top Professionals Across{' '}
            <span className="text-[#e3e3e3] font-semibold">60+ Countries</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <button
              onClick={onGetStarted}
              className="group relative inline-flex items-center px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold text-black bg-gradient-to-r from-[#e3e3e3] via-[#C0C0C0] to-[#cbcccd] rounded-xl overflow-hidden transition-all duration-300 shadow-2xl hover:shadow-[#C0C0C0]/50 transform hover:-translate-y-1 active:translate-y-0"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#cbcccd] via-[#C0C0C0] to-[#e3e3e3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">Start Your Journey Today</span>
              <ArrowRight className="relative z-10 ml-2 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform duration-300" />
              <span className="absolute inset-0 -z-10 bg-gradient-to-r from-[#e3e3e3] via-[#C0C0C0] to-[#cbcccd] blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></span>
            </button>
          </motion.div>

          <motion.p
            className="mt-6 sm:mt-8 text-xs sm:text-sm text-[#b4b5b8] flex items-center justify-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#C0C0C0] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C0C0C0]"></span>
            </span>
            <span>Applications reviewed within 48 hours</span>
          </motion.p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C0C0C0] to-transparent shadow-[0_0_15px_rgba(192,192,192,0.5)]"></div>
    </section>
  );
}
