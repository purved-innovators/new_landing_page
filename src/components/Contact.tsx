import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ceo@bestownrealty.ae',
    link: 'mailto:ceo@bestownrealty.ae',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+971 58 552 3700',
    link: 'tel:+971585523700',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Office No 1305, The Regal Tower, Business Bay, Dubai',
    link: null,
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'Best Town Realty - Global Associates',
    link: 'https://www.bestownrealty.ae/',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Contact{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e3e3e3] via-[#C0C0C0] to-[#cbcccd] animate-shimmer bg-[length:200%_100%]">
              Information
            </span>
          </h2>
          <motion.p
            className="text-slate-300 text-lg sm:text-xl"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Have questions? Our team is here to help you get started.
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            const content = (
              <motion.div
                className="bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 rounded-2xl p-6 sm:p-8 hover:border-[#C0C0C0]/60 transition-all hover:shadow-2xl hover:shadow-[#C0C0C0]/20 h-full group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C0C0C0] to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="flex flex-col items-center text-center relative z-10">
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C0C0C0]/30 to-[#cbcccd]/30 rounded-xl blur-xl group-hover:blur-2xl transition-all"></div>
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#e3e3e3] via-[#C0C0C0] to-[#cbcccd] rounded-xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-[#C0C0C0]/50 transition-all">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-slate-900" />
                    </div>
                  </motion.div>

                  <h3 className="text-xs sm:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e3e3e3] to-[#C0C0C0] mb-3 uppercase tracking-wider">
                    {item.label}
                  </h3>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            );

            return item.link ? (
              <a
                key={index}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : undefined}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            );
          })}
        </div>

        <motion.div
          className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t-2 border-slate-700/50 text-center relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#C0C0C0] to-transparent rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
          />
          <p className="text-slate-400 text-sm sm:text-base">
            &copy; {new Date().getFullYear()}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e3e3e3] to-[#C0C0C0] font-semibold">
              Best Town Realty
            </span>
            . All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
