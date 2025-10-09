import { Building2, Calculator, Brain, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const highlights = [
  {
    icon: Building2,
    text: "Access to Dubai's $100+ billion real estate market",
  },
  {
    icon: Calculator,
    text: 'Master payment plans: 30/70 and 60/40 models',
  },
  {
    icon: Brain,
    text: 'Learn the psychology of selling to international investors',
  },
  {
    icon: Clock,
    text: 'Build a sustainable 24/7 income stream',
  },
];

export default function ProgramDetails() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-gradient-to-br from-black via-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#C0C0C0]/5 via-transparent to-[#cbcccd]/5 opacity-50"></div>

      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#C0C0C0] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            <span className="text-white">Why </span>
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e3e3e3] via-[#C0C0C0] to-[#cbcccd] animate-shimmer bg-[length:200%_100%]">
                Global Associates Referral Program
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C0C0C0] to-transparent rounded-full shadow-[0_0_10px_rgba(192,192,192,0.5)]"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.5 }}
              />
            </span>
            <span className="block mt-2 text-white">Stands Apart</span>
          </h2>
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Global Associates Referral Program gives you access to exclusive events and VIP networking opportunities that set you apart from the competition. Over 8 intensive weeks, you'll gain insider knowledge of Dubai's $100+ billion real estate market, learning directly from industry leaders who have facilitated thousands of successful transactions.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-3xl p-8 sm:p-10 text-white shadow-2xl overflow-hidden group border-2 border-[#C0C0C0]/20">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#C0C0C0]/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#cbcccd]/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C0C0C0] to-transparent"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              />

              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#e3e3e3] via-[#C0C0C0] to-[#cbcccd]">
                  What Makes Us Different:
                </h3>
                <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-6">
                  Our program goes beyond basic referral arrangements. You'll understand payment plans like 30/70 and 60/40 models, master ROI calculations for different property types, and learn the psychology of selling to international investors around the world.
                </p>
                <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                  Learn how to become a referral real estate agent specializing in Dubai properties while building a sustainable income stream that works 24/7. Understanding what is a referral in real estate is the first step to maximizing your earning potential in this booming market.
                </p>
              </div>

              <motion.div
                className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C0C0C0] to-transparent"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
              />
            </div>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-start space-x-4 sm:space-x-6 p-6 sm:p-8 bg-gradient-to-r from-slate-800/80 to-slate-900/80 border-2 border-[#C0C0C0]/20 rounded-2xl group-hover:border-[#C0C0C0]/60 group-hover:shadow-2xl group-hover:shadow-[#C0C0C0]/20 transition-all duration-300 relative overflow-hidden backdrop-blur-sm">
                    <motion.div
                      className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#e3e3e3] via-[#C0C0C0] to-[#cbcccd] rounded-l-2xl"
                      initial={{ scaleY: 0 }}
                      animate={isInView ? { scaleY: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
                    />

                    <motion.div
                      className="flex-shrink-0 relative"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#C0C0C0]/30 to-[#cbcccd]/30 rounded-xl blur-xl group-hover:blur-2xl transition-all"></div>
                      <div className="relative w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-[#e3e3e3] via-[#C0C0C0] to-[#cbcccd] rounded-xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-[#C0C0C0]/50 transition-all duration-300">
                        <Icon className="w-8 h-8 sm:w-9 sm:h-9 text-slate-900" />
                      </div>
                    </motion.div>

                    <p className="text-white font-bold pt-4 text-base sm:text-lg lg:text-xl flex-1 leading-snug">
                      {highlight.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
