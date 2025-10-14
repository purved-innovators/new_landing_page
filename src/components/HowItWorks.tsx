import { GraduationCap, Users, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    icon: GraduationCap,
    title: 'Learn',
    description: 'Complete our exclusive 8-week training program led personally by Sania Khan, CEO of Best Town Realty. Master Dubai\'s real estate laws, understand top developers in Dubai, and learn proven investment strategies that attract international buyers.',
  },
  {
    icon: Users,
    title: 'Refer',
    description: 'Use your newfound expertise to identify and refer qualified clients interested in Dubai properties. Whether you\'re a friends real estate broker or an independent agent, our program welcomes all professionals ready to expand their reach.',
  },
  {
    icon: DollarSign,
    title: 'Earn',
    description: 'Receive the same commission structure as our Dubai-based agents, plus exclusive perks like VIP event invitations, sponsored trips, and recognition awards. Our streamlined process ensures you get paid quickly and transparently.',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAyMCAwIEwgMCAwIDAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMDAsMjAwLDIwMCwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
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
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            <motion.span
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#e3e3e3] via-[#C0C0C0] to-[#cbcccd] animate-shimmer bg-[length:200%_100%]"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              Global Associates Referral Program
            </motion.span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto px-4 leading-relaxed">
            The Global Associates Referral Program connects international real estate professionals with Dubai's thriving property market through a simple three-step process:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex flex-col group h-full">
                  {/* Icon and Number */}
                  <div className="flex justify-center mb-6 sm:mb-8">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-[#C0C0C0]/30 to-[#cbcccd]/30 rounded-full blur-2xl"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      ></motion.div>
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-[#e3e3e3] via-[#C0C0C0] to-[#cbcccd] rounded-full flex items-center justify-center shadow-2xl border-4 border-slate-800 group-hover:shadow-[#C0C0C0]/50 transition-all duration-300">
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-slate-900" />
                      </div>
                      <motion.div
                        className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#e3e3e3] via-[#C0C0C0] to-[#cbcccd] text-slate-900 rounded-full flex items-center justify-center font-bold text-sm sm:text-base shadow-lg border-2 border-slate-800"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ type: "spring", stiffness: 500, delay: index * 0.2 + 0.5 }}
                      >
                        {index + 1}
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Title and Description */}
                  <div className="flex flex-col flex-1 w-full">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 text-center">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e3e3e3] via-[#C0C0C0] to-[#cbcccd]">
                        {step.title}
                      </span>
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-sm sm:text-base lg:text-lg text-justify flex-1">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-12 sm:top-14 left-full w-full h-1 -ml-6"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.8 }}
                  >
                    <div className="relative h-full">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#C0C0C0] to-transparent rounded-full shadow-[0_0_10px_rgba(192,192,192,0.5)]"></div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="md:hidden flex justify-center mt-8 sm:mt-10 space-x-4">
          {steps.map((_, index) => (
            index < steps.length - 1 && (
              <motion.div
                key={index}
                className="w-12 h-1 bg-gradient-to-r from-[#C0C0C0] to-[#e3e3e3] rounded-full shadow-lg"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              ></motion.div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}