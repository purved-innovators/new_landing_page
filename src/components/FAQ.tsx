import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const faqs = [
  {
    question: 'Who can join the Global Associates Referral Program?',
    answer: 'Real estate agents, brokers, independent consultants, and professionals worldwide who want to expand into Dubai property investments. No prior Dubai market experience required.',
  },
  {
    question: 'How much does the training program cost?',
    answer: 'The 8-week training program is provided at no cost to accepted associates. We invest in your success because we believe in long-term partnerships.',
  },
  {
    question: 'Do I need to relocate to Dubai?',
    answer: 'No. The entire program is designed for remote participation. All training sessions are conducted via Zoom, and you can operate from your current location.',
  },
  {
    question: 'What ongoing support do I receive?',
    answer: 'Continuous market updates, access to new property launches, marketing materials, and direct support from our Dubai team whenever needed.',
  },
  {
    question: 'How is this different from other referral programs?',
    answer: 'Unlike basic referral arrangements, you receive comprehensive training, direct CEO mentorship, the same commission rates as local agents, and exclusive access to VIP events and networking opportunities.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
            Frequently Asked{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e3e3e3] via-[#C0C0C0] to-[#cbcccd] animate-shimmer bg-[length:200%_100%]">
                Questions
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C0C0C0] to-transparent rounded-full shadow-[0_0_15px_rgba(192,192,192,0.5)]"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 rounded-2xl overflow-hidden transition-all hover:border-[#C0C0C0]/60 hover:shadow-xl hover:shadow-[#C0C0C0]/10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className={`absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-[#e3e3e3] via-[#C0C0C0] to-[#cbcccd] transition-all duration-300 ${
                    openIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                  initial={false}
                  animate={{ scaleY: openIndex === index ? 1 : 0 }}
                />

                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between group"
                >
                  <span className="text-base sm:text-lg lg:text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#e3e3e3] group-hover:via-[#C0C0C0] group-hover:to-[#cbcccd] transition-all pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#e3e3e3] via-[#C0C0C0] to-[#cbcccd] rounded-lg flex items-center justify-center shadow-lg">
                      <ChevronDown className="w-5 h-5 text-slate-900" />
                    </div>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <motion.div
                          className="pt-4 border-t border-slate-700/50"
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <p className="text-slate-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                            {faq.answer}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
