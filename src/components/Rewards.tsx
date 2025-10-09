import { CheckCircle2, Trophy, Plane, Award, TrendingUp, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const benefits = [
  {
    icon: TrendingUp,
    text: 'Same commission slabs as Dubai-based agents',
  },
  {
    icon: Users,
    text: 'Personal mentorship from our CEO',
  },
  {
    icon: Award,
    text: 'VIP access to property launches and networking events',
  },
  {
    icon: Plane,
    text: 'Sponsored international roadshow invitations',
  },
  {
    icon: Trophy,
    text: 'Recognition awards for top performers',
  },
  {
    icon: CheckCircle2,
    text: 'Ongoing market updates and support',
  },
];

export default function Rewards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-gradient-to-br from-slate-900 via-black to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C0C0C0] to-transparent"></div>
      </div>

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
              opacity: [0.1, 0.6, 0.1],
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-white">Earn More Than Any </span>
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e3e3e3] via-[#C0C0C0] to-[#cbcccd] animate-shimmer bg-[length:200%_100%]">
                UAE Affiliate Program
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C0C0C0] to-transparent rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span>
          </h2>
          <motion.p
            className="text-xl sm:text-2xl text-[#e3e3e3] font-semibold mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Unlock Dubai-Level Commissions Without Relocating
          </motion.p>
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Unlike traditional UAE Affiliate Program models, we provide comprehensive training and ongoing support that transforms you into a certified Dubai property specialist. Our commission structure matches what our in-house Dubai agents earn, giving you access to one of the world's most lucrative real estate markets.
          </motion.p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border-2 border-[#C0C0C0]/30 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#C0C0C0]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#cbcccd]/10 to-transparent rounded-full blur-3xl"></div>

          <motion.h3
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 text-center relative"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className="text-white">Your Exclusive </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e3e3e3] via-[#C0C0C0] to-[#cbcccd]">
              Benefits
            </span>
            <span className="text-white"> Include:</span>
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-slate-800/60 to-black/60 border border-[#C0C0C0]/20 group-hover:border-[#C0C0C0]/60 group-hover:shadow-xl group-hover:shadow-[#C0C0C0]/20 transition-all duration-300 h-full backdrop-blur-sm">
                    <motion.div
                      className="flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#e3e3e3] via-[#C0C0C0] to-[#cbcccd] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-[#C0C0C0]/50 transition-all duration-300">
                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-slate-900" />
                      </div>
                    </motion.div>
                    <p className="text-slate-200 font-semibold pt-3 text-base sm:text-lg leading-snug">
                      {benefit.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t-2 border-[#C0C0C0]/20 text-center relative"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-[#e3e3e3] via-[#C0C0C0] to-[#cbcccd] rounded-xl shadow-xl">
              <p className="text-slate-900 font-bold text-lg sm:text-xl">
                Certificate of completion and official associate status
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
